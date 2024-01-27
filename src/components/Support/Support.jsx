import React from "react";
import "./Support.css";
import { SupportDetails } from "../Data/Support";
export const Support = () => {
  return (
    <div className="support-main-class">
      <div className="support-hero-container">
        <h1 id="h1support">Support</h1>
      </div>
      <div className="support-header-container">
        <div className="support-details-sec-div">
          {SupportDetails.map((i) => (
            <div className="supp-div-con">
              <div className="supp-img-div">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={i.image}
                  alt=""
                />
              </div>
              <div>
                <h2 style={{ color: "#3483eb" }}>{i.name}</h2>
                <span>{i.des}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
