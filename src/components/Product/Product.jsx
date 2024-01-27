import { useState } from "react";
import { Function } from "../Data/Function";
import { General } from "../Data/General";
import { Interface } from "../Data/Interface";
import { Network } from "../Data/Network";
import { ProductItems } from "../Data/Prod";
import { Smartfeatures } from "../Data/Smartfeatures";
import { Storage } from "../Data/Storage";
import { Vedio } from "../Data/Vedio";
import "./Product.css";

export const Product = () => {
  const [Tabs, setTabs] = useState("0");
  const setTab = (value) => {
    setTabs(value);
  };

  return (
    <div>
      <div className="pro-main-div">
        <div className="pro-details-list">
          <h2>HC-IPC-DQA4113-0280-DLS</h2>
          <span>Product Features</span>
          <ul>
            <li>Day/night functionality</li>
            <li>Max. resolution: 2304x1296</li>
            <li>ICR auto switch, true day/night,</li>
            <li>30m Smart Dual Light Colorized Night view</li>
            <li>3D DNR, Digital WDR, HLC, BLC, Defog</li>
            <li>PoE Power Supply</li>
            <li>Built-in mic and Speaker</li>
            <li>
              Support mobile surveillance by smart phones with iOS and Android
              OS
            </li>
            <li>IP67 Ingress Protection</li>
          </ul>
        </div>
        <div className="pro-details-image">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://genieproducts.co.uk/app/uploads/2021/07/GAHD18IRPTZ-Web.png"
            alt=""
          />
        </div>
      </div>
      {/* Specifications */}
      <div className="pro-maindiv-container">
        <div className="pro-main-sliderdiv">
          <div className="pro-spe-dow-list">
            <div className="pro-spe-dow-class">
              <h3
                style={{
                  textDecoration: "none",
                  color: "#32a8a2",
                  borderBottom: Tabs === 1 && "2px solid #32a8a2",
                }}
                onClick={() => setTab(1)}
              >
                Specification
              </h3>
              <h3
                style={{
                  textDecoration: "none",
                  color: "#32a8a2",
                  borderBottom: Tabs === 2 && "2px solid #32a8a2",
                  marginLeft: "20px",
                }}
                onClick={() => setTab(2)}
              >
                Download
              </h3>
            </div>
            <hr />
          </div>
          <div style={{ display: Tabs === 1 ? "block" : "none" }}>
            <div>
              <h4 style={{ color: "#32a8a2" }}>Cameras</h4>
              <hr />
              <div>
                {ProductItems.map((i) => (
                  <div>
                    <div className="pro-pre-list__items">
                      <div style={{ width: "20%" }}>
                        <span>{i.left}</span>
                      </div>
                      <div style={{ width: "80%" }}>
                        <span>{i.right}</span>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: "#32a8a2" }}>Vedio</h4>
              <hr />
              <div>
                {Vedio.map((i) => (
                  <div>
                    <div className="pro-pre-list__items">
                      <div style={{ width: "20%" }}>
                        <span>{i.left}</span>
                      </div>
                      <div style={{ width: "80%" }}>
                        <span>{i.right}</span>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: "#32a8a2" }}>Smart Features</h4>
              <hr />
              <div>
                {Smartfeatures.map((i) => (
                  <div>
                    <div className="pro-pre-list__items">
                      <div style={{ width: "20%" }}>
                        <span>{i.left}</span>
                      </div>
                      <div style={{ width: "80%" }}>
                        <span>{i.right}</span>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ color: "#32a8a2" }}>Stroage</h4>
              <hr />
              <div>
                {Storage.map((i) => (
                  <div>
                    <div className="pro-pre-list__items">
                      <div style={{ width: "20%" }}>
                        <span>{i.left}</span>
                      </div>
                      <div style={{ width: "80%" }}>
                        <span>{i.right}</span>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h4 style={{ color: "#32a8a2" }}>Network</h4>
                <hr />
                <div>
                  {Network.map((i) => (
                    <div>
                      <div className="pro-pre-list__items">
                        <div style={{ width: "20%" }}>
                          <span>{i.left}</span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <span>{i.right}</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ color: "#32a8a2" }}>Interface</h4>
                <hr />
                <div>
                  {Interface.map((i) => (
                    <div>
                      <div className="pro-pre-list__items">
                        <div style={{ width: "20%" }}>
                          <span>{i.left}</span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <span>{i.right}</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ color: "#32a8a2" }}>Function</h4>
                <hr />
                <div>
                  {Function.map((i) => (
                    <div>
                      <div className="pro-pre-list__items">
                        <div style={{ width: "20%" }}>
                          <span>{i.left}</span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <span>{i.right}</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ color: "#32a8a2" }}>General</h4>
                <hr />
                <div>
                  {General.map((i) => (
                    <div>
                      <div className="pro-pre-list__items">
                        <div style={{ width: "20%" }}>
                          <span>{i.left}</span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <span>{i.right}</span>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Download */}
          <div style={{ display: Tabs === 2 ? "block" : "none" }}>
            <div>
              <h4 style={{ color: "#32a8a2" }}>Data Sheet</h4>
              <hr />
            </div>
            <div className="pro-pre-spe--download">
              <span style={{ width: "30%" }}>Filename</span>
              <span style={{ width: "20%" }}>Size</span>
              <span style={{ width: "20%" }}>Type</span>
              <span style={{ width: "30%" }}>Download</span>
            </div>
            <div className="pro-pre-spe--download">
              <span style={{ width: "30%" }}>HC-IPC-TSA2200N4-M_4.pdf</span>
              <span style={{ width: "20%" }}>960.71 KB</span>
              <span style={{ width: "20%" }}>pdf</span>
              <button
                style={{
                  width: "100px",
                  backgroundColor: "#32a8a2",
                  color: "white",
                  border: "none",
                  borderRadius: "7px",
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
