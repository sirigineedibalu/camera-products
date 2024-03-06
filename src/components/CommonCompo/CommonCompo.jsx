import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { newPTZ } from "../Data/PTZ";
import "./CommonCompo.css";
const CommonCompo = () => {
  const location = useLocation();
  const pathValue = location.pathname;

  const [firstInitialData, setFirstInitialData] = useState([]);
  const [secondInitialData, setSecondInitialData] = useState([]);

  // store subcams
  const [subCams, setSubCams] = useState([]);

  // store initially subCams
  const [initiallySubCams, setInitiallySubCams] = useState("");

  // store unique pixels
  const [uniquePixls, setUniquePixls] = useState([]);

  // store uniquepixles initially values
  const [uniquePixInitially, setUniquePixInitially] = useState("");

  // main data store

  const [mainData, setMainData] = useState([]);

  // console.log(pathValue);
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    const filterData = newPTZ.filter((each) => each.name === pathValue);
    setFirstInitialData(filterData);
    setSecondInitialData(filterData);
  }, [pathValue]);
  // console.log(secondInitialData);

  useEffect(() => {
    if (firstInitialData[0]?.subCams.length > 0) {
      setSubCams(firstInitialData[0]?.subCams);
      let initialValue = firstInitialData[0]?.subCams[0]?.name;
      setInitiallySubCams(initialValue);
      // console.log(initialValue);
      let initialDisplayArr = firstInitialData[0]?.cams?.filter(
        (each) => each.subId === initialValue
      );
      // console.log(initialDisplayArr);
      const uniqueCamsPix = [
        ...new Set(initialDisplayArr?.map((each) => each.id)),
      ];
      setUniquePixInitially(uniqueCamsPix[0]);
      setUniquePixls(uniqueCamsPix);
      // console.log(uniqueCamsPix[0]);

      const mainData = initialDisplayArr.filter(
        (each) => each.id === uniqueCamsPix[0]
      );
      // console.log(mainData);
      setMainData(mainData);
    } else {
      const uniqueCamsPix = [
        ...new Set(firstInitialData[0]?.cams?.map((each) => each.id)),
      ];
      // console.log(uniqueCamsPix);
      setUniquePixInitially(uniqueCamsPix[0]);
      setUniquePixls(uniqueCamsPix);

      const mainData = firstInitialData[0]?.cams?.filter(
        (each) => each.id === uniqueCamsPix[0]
      );
      // console.log(mainData);
      setMainData(mainData);
    }
  }, [firstInitialData]);

  const onChangeTab = (name) => {
    // console.log(name);
    // console.log(firstInitialData[0]?.cams);
    setInitiallySubCams(name);
    let initialDisplayArr = firstInitialData[0]?.cams?.filter(
      (each) => each.subId === name
    );
    // console.log(initialDisplayArr);
    const uniqueCamsPix = [
      ...new Set(initialDisplayArr?.map((each) => each.id)),
    ];
    setUniquePixInitially(uniqueCamsPix[0]);
    setUniquePixls(uniqueCamsPix);
    // console.log(uniqueCamsPix);
    const mainData = initialDisplayArr.filter(
      (each) => each.id === uniqueCamsPix[0]
    );
    // console.log(mainData);
    setMainData(mainData);
  };

  const onFunctionPixChange = (pix) => {
    // console.log(pix);
    if (initiallySubCams) {
      let initialDisplayArr = firstInitialData[0]?.cams?.filter(
        (each) => each.subId === initiallySubCams
      );
      // console.log(initialDisplayArr);
      const mainData = initialDisplayArr.filter((each) => each.id === pix);
      setUniquePixInitially(pix);
      setMainData(mainData);
    } else {
      console.log(pix);
      setUniquePixInitially(pix);
      const mainData = firstInitialData[0]?.cams?.filter(
        (each) => each.id === pix
      );
      // console.log(mainData);
      setMainData(mainData);
    }
  };

  return (
    <div className="main__common__card" ref={scroll}>
      {subCams.length > 0 && (
        <div className="sub__cams__card_head">
          <div className="single__smax__main__card">
            {subCams.map((each, key) => (
              <div
                key={key}
                style={{
                  background: initiallySubCams === each.name && "#02b8fa",
                }}
                onClick={() => onChangeTab(each.name)}
                className="single__cams__details__head"
              >
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    // overflow: "hidden",
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
        {uniquePixls?.map((each) => (
          <div
            style={{
              background: uniquePixInitially === each && "#02b8fa",
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
        {mainData?.map((each) => (
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
