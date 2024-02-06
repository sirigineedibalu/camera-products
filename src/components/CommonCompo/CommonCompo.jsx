import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { newPTZ } from "../Data/PTZ";
import "./CommonCompo.css";
const CommonCompo = () => {
  const location = useLocation();
  const pathValue = location.pathname;
  // main
  const [secondData, setSecondData] = useState([]);

  const [singleCamsData, setSingleCamsData] = useState([]);

  const [filterSubCams, setFilterSubCams] = useState([]);
  const [newFilterSubCam, setNewFilterSubCam] = useState([]);

  const [uniquesPixs, setUniquesPix] = useState([]);
  //
  //
  const [initialDisplay, setInitialDisplay] = useState("");

  const [pixelInitial, setPixelInitial] = useState("");

  // const [initialAllArray, setInitialAllArray] = useState([]);

  // console.log(pathValue);
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    const filterData = newPTZ.filter((each) => each.name === pathValue);
    // console.log(filterData);
    setSingleCamsData(filterData);
    setSecondData(filterData);
  }, [pathValue]);

  useEffect(() => {
    let n = secondData[0]?.cams;
    setFilterSubCams(n);
    setNewFilterSubCam(n);
  }, [secondData]);

  const onChangeTab = (name) => {
    console.log(name);
    const newFilterBasedOnSubId = singleCamsData[0]?.cams?.filter(
      (each) => each.subId === name
    );

    // console.log(newFilterBasedOnSubId);

    setFilterSubCams(newFilterBasedOnSubId);
    setNewFilterSubCam(newFilterBasedOnSubId);

    // console.log(initialValue);
    setInitialDisplay(name);
  };

  useEffect(() => {
    const uniqueCamsPix = [...new Set(filterSubCams?.map((each) => each.id))];
    // console.log(uniqueCamsPix);
    setUniquesPix(uniqueCamsPix);
  }, [filterSubCams]);

  const onFunctionPixChange = (value) => {
    console.log(value);
    let va = filterSubCams?.filter((each) => each.id === value);
    // console.log(va);

    setNewFilterSubCam(va);
    setPixelInitial(value);
  };

  useEffect(() => {
    if (singleCamsData[0]?.subCams.length) {
      // console.log(singleCamsData[0]?.subCams.length);
      let initialValue = singleCamsData[0]?.subCams[0];
      // console.log(initialValue);
      setInitialDisplay(initialValue);
      let initialDisplayArr = singleCamsData[0]?.cams?.filter(
        (each) => each.subId === initialValue
      );
      console.log(initialDisplayArr);
      setNewFilterSubCam(initialDisplayArr);
    }
    // let initialState =
  }, [singleCamsData]);

  // console.log(singleCamsData);
  // console.log(filterSubCams);

  // console.log(pixelInitial);

  return (
    <div className="main__common__card" ref={scroll}>
      {filterSubCams?.length > 0 && (
        <div className="sub__cams__card_head">
          <div className="single__smax__main__card">
            {secondData[0]?.subCams?.map((each) => (
              <div
                style={{
                  background: initialDisplay === each.name && "#02b8fa",
                }}
                onClick={() => onChangeTab(each.name)}
                className="single__cams__details__head"
              >
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    // border: "1px solid red",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={each.img}
                    alt="not pic"
                  />
                </div>
                <span>{each.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="sub__cams__card">
        {uniquesPixs?.map((each) => (
          <div
            style={{
              background: pixelInitial === each && "#02b8fa",
            }}
            onClick={() => onFunctionPixChange(each)}
            className="single__cams__details"
          >
            <span>{each}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="main__all__cams__display__card">
        {newFilterSubCam?.map((each) => (
          <div className="main__cams__single__card">
            <img style={{ width: "100%" }} src={each.image} alt="" />
            <h3>{each.name}</h3>
            <span>{each.des}</span>
            <Link to="/ProductDetails">
              <button className="btn btn-danger">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonCompo;
