import React, { useState } from "react";
import "./NetworkingCameras.css";
import { PTZ } from "../Data/PTZ";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const initialData = [
  {
    id: "network",
    name: "Box Cameras",
  },
  {
    id: "Bullet",
    name: "Bullet Cameras",
  },
  {
    id: "Dom",
    name: "Fixed Dome Cameras",
  },
  {
    id: "ptz",
    name: "PTZ Dome Cameras",
  },
];

export const NetworkingCameras = () => {
  const [initialKey, setInitialKey] = useState(0);

  // const [secondTab, setSecondTab] = useState(1);

  const [filterData, setFilterData] = useState(
    PTZ.filter((each) => each.id.includes("network"))
  );

  const onChickInitialTab = (obj) => {
    setInitialKey(obj.key);
    // console.log(obj);
    let newFilter = PTZ.filter((each) => each.id.includes(obj.name));
    // console.log(newFilter);
    setFilterData(newFilter);
  };

  const onPixChange = (id) => {
    // setSecondTab(id);
    console.log(id);
    let filterData = PTZ.filter((each) => {
      if (id === "network" || id === "Bullet" || id === "Dom" || id === "ptz") {
        return each.id.includes(id);
      } else {
        return each.id === id;
      }
    });

    setFilterData(filterData);
  };

  return (
    <div>
      <div>
        {/* <h1>name</h1> */}
        <div className="n-w-fiestdiv">
          {initialData.map((each, key) => (
            <div
              key={key}
              onClick={() => onChickInitialTab({ key: key, name: each.id })}
              className="n-w-main-container"
            >
              <span>{each.name}</span>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <div
            className={`n-w-types-con ${
              initialKey === 0 ? "show_second_tab" : "hiden_second_tab"
            }`}
          >
            <div id="gap">
              <span onClick={() => onPixChange("network")}>All</span>
              <span onClick={() => onPixChange("1.3mp network")}>1.3 MP</span>
              <span onClick={() => onPixChange("2mp network")}>2 MP</span>
              <span onClick={() => onPixChange("4mp network")}>4 MP</span>
            </div>
          </div>
          <div
            className={`n-w-types-con ${
              initialKey === 1 ? "show_second_tab" : "hiden_second_tab"
            }`}
          >
            <div id="gap">
              <span onClick={() => onPixChange("Bullet")}>All</span>
              <span onClick={() => onPixChange("1.3mp Bullet")}>1.3 MP</span>
              <span onClick={() => onPixChange("2mp Bullet")}>2 MP</span>
              <span onClick={() => onPixChange("3mp Bullet")}>3 MP</span>
              <span onClick={() => onPixChange("4mp Bullet")}>4 MP</span>
              <span onClick={() => onPixChange("5mp Bullet")}>5 MP</span>
              <span onClick={() => onPixChange("8mp Bullet")}>8 MP</span>
            </div>
          </div>
          <div
            className={`n-w-types-con ${
              initialKey === 2 ? "show_second_tab" : "hiden_second_tab"
            }`}
          >
            <div id="gap">
              <span onClick={() => onPixChange("Dom")}>All</span>
              <span onClick={() => onPixChange("1.3mp Dom")}>1.3 MP</span>
              <span onClick={() => onPixChange("2mp Dom")}>2 MP</span>
              <span onClick={() => onPixChange("3mp Dom")}>3 MP</span>
              <span onClick={() => onPixChange("4mp Dom")}>4 MP</span>
              <span onClick={() => onPixChange("5mp Dom")}>5 MP</span>
              <span onClick={() => onPixChange("fisheye")}>Fish eye</span>
            </div>
          </div>
          <div
            className={`n-w-types-con ${
              initialKey === 3 ? "show_second_tab" : "hiden_second_tab"
            }`}
          >
            <div id="gap">
              <span onClick={() => onPixChange("ptz")}>All</span>
              <span onClick={() => onPixChange("1.3mp ptz")}>1.3 MP</span>
              <span onClick={() => onPixChange("2mp ptz")}>2 MP</span>
              <span onClick={() => onPixChange("3mp ptz")}>3 MP</span>
              <span onClick={() => onPixChange("4k ptz")}>4 K</span>
            </div>
          </div>
        </div>
        {/* Cameras types */}
        <div className="n-w-camera-details">
          {filterData.map((each) => (
            <div className="nwcameras-main-container ">
              <div className="n-w-img-cam ">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={each.image}
                  alt=""
                />
              </div>
              <div className="n-w-matter-cam ">
                <h5>{each.name}</h5>
                <span>{each.des}</span>
                <center>
                  <Link to="/ProductDetails">
                    <button className="btn btn-danger">View Details</button>
                  </Link>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
