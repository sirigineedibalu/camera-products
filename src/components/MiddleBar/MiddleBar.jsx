import { Link } from "react-router-dom";
import "./MiddleBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const MiddleBar = () => {
  return (
    <div className="middle-main-con">
      <h2 className="hedhuhd">
        <b>ADVANCED SECURITY AND SURVEILLANCE SOLUTIONS</b>
      </h2>
      {/* 1 */}
      <div className="middle-container">
        <div className="middle-img-container">
          <img style={{ width: "100%" }} src="Images/DOME (2).png" alt="" />
        </div>
        <div className="middle-img-matter">
          <h1>VELOCITY SERIES</h1>
          <h3>
            <i>NETWORK CAMERAS</i>
          </h3>
          <span>
            Trinai AI CCTV cameras are network IP cameras that deliver advanced
            analytical functions like vehicle detection, Face recognition, Face
            detection, people counting.
          </span>
          <center>
            {" "}
            <button className="btn btn-primary">
              <Link
                style={{ textDecorationLine: "none", color: "#fff" }}
                to="/NetworkingCameras"
              >
                View more{" "}
              </Link>
            </button>
          </center>
        </div>
        <div className="middle-color-con"></div>
      </div>
      {/* 2 */}
      <div className="middle-container">
        <div className="middle-img-matter1">
          <h1>PROTECT YOUR LOVED ONES</h1>
          <h3>
            <i>SMART IP CAMERAS</i>
          </h3>
          <span>
            A smart home allows homeowners to control appliances, thermostats,
            lights, and other devices remotely using a smartphone or tablet
            through an internet connection.
          </span>
          <center>
            <button className="btn btn-primary">
              <Link
                style={{ textDecorationLine: "none", color: "#fff" }}
                to="/NetworkingCameras"
              >
                View more{" "}
              </Link>
            </button>
          </center>
        </div>
        <div className="middle-img-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src="Images/Bullet_1 (4).png"
            alt=""
          />
        </div>
        <div className="middle-color-con1"></div>
      </div>
    </div>
  );
};
