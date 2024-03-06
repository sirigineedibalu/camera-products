import React, { useEffect, useRef, useState } from "react";
import { Function } from "../Data/Function";
import { General } from "../Data/General";
import { Interface } from "../Data/Interface";
import { Network } from "../Data/Network";
import { ProductItems } from "../Data/Prod";
import { Smartfeatures } from "../Data/Smartfeatures";
import { Storage } from "../Data/Storage";
import { Vedio } from "../Data/Vedio";
import "./Product.css";
import { Link } from "react-router-dom";
import { Pdf } from "../Data/PDFdata";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const Product = () => {
  const [Tabs, setTabs] = useState(1);
  const scroll = useRef();

  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const pdfFileName = "DataSheets/AI02B030L67.pdf";
  const pdfUrl = process.env.PUBLIC_URL + "/" + pdfFileName;

  const downloadPdf = async () => {
    const path = "DataSheets/AI02B030L67.pdf";
    const pdfUrl = process.env.PUBLIC_URL + "/" + path;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", path);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // const capture = document.querySelector(".certificate__card");
    // const canvas = await html2canvas(capture);

    // const pdf = new jsPDF({
    //   orientation: "portrait",
    //   unit: "in",
    //   format: [4, 3],
    // });

    // const imgData = canvas.toDataURL("image/png");
    // const width = pdf.internal.pageSize.getWidth();
    // const height = (canvas.height * width) / canvas.width;

    // pdf.addImage(imgData, "PNG", 0, 0, width, height);

    // pdf.addPage();
    // pdf.text("Page 5 Content", 20, 30);

    // pdf.save("Trinai Datasheet.pdf");
  };

  const previewPdf = () => {
    console.log("jkl;/'");
    setOpenPreviewModal(true);
    // const capture = document.querySelector(".certificate__card");
    // const canvas = await html2canvas(capture);

    // const pdf = new jsPDF({
    //   orientation: "portrait",
    //   unit: "in",
    //   format: [4, 3],
    // });

    // const imgData = canvas.toDataURL("image/png");
    // const width = pdf.internal.pageSize.getWidth();
    // const height = (canvas.height * width) / canvas.width;

    // pdf.addImage(imgData, "PNG", 0, 0, width, height);

    // // Open the preview in a new tab
    // window.open(pdf.output("bloburl"), "_blank");
  };

  return (
    <div className="certificate__card" ref={scroll}>
      <div
        style={{ filter: openPreviewModal && "blur(10px)" }}
        className="pro-main-div"
      >
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
          <img style={{ width: "100%" }} src="Images/ptz.png" alt="" />
        </div>
      </div>
      <div
        style={{
          filter: openPreviewModal && "blur(10px)",
        }}
        className="pro-maindiv-container"
      >
        <div className="pro-main-sliderdiv">
          <div className="pro-spe-dow-list">
            <div className="pro-spe-dow-class">
              <h3
                style={{
                  textDecoration: "none",
                  color: "#32a8a2",
                  borderBottom: Tabs === 1 && "2px solid #32a8a2",
                }}
                onClick={() => setTabs(1)}
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
                onClick={() => setTabs(2)}
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
                {ProductItems.map((i, key) => (
                  <div
                  // style={{
                  //   background: key % 2 === 0 && "lightgrey",
                  // }}
                  // key={key}
                  >
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
              <h4 style={{ color: "#32a8a2" }}>Video</h4>
              <hr />
              <div>
                {Vedio.map((i, key) => (
                  <div
                  // style={{
                  //   background: key % 2 === 0 && "lightgrey",
                  // }}
                  // key={key}
                  >
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
              <h4 style={{ color: "#32a8a2" }}>Storage</h4>
              <hr />
              <div>
                {Storage.map((i) => (
                  <div>
                    <div className="pro-pre-list__items">
                      <div style={{ width: "20%", display: "flex" }}>
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
                  width: "150px",
                  backgroundColor: "#32a8a2",
                  color: "white",
                  border: "none",
                  borderRadius: "7px",
                  marginRight: "20px",
                }}
                onClick={previewPdf}
              >
                Preview PDF
              </button>{" "}
              {/* src={require(i.pdf)} */}
              {Pdf?.map((i) => (
                <Link
                  to="D:/projects/trinai/public/DataSheets/AI02B030L67.pdf"
                  target="blank"
                >
                  <button
                    onClick={downloadPdf}
                    style={{
                      width: "150px",
                      backgroundColor: "#32a8a2",
                      color: "white",
                      border: "none",
                      borderRadius: "7px",
                    }}
                  >
                    Download
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>{/* <button onClick={downloadPdf}>Download PDF</button> */}</div>
      {openPreviewModal && (
        <div className="previewModal-main-card">
          <div>
            <div className="cros_preview-card">
              <span>Show Preview</span>

              <span onClick={() => setOpenPreviewModal(false)}>
                <IoMdCloseCircleOutline size={28} />
              </span>
            </div>
            <div className="main-preview-card">
              <iframe
                title="PDF Preview"
                width="100%"
                height="500px"
                src={pdfUrl}
                type="application/pdf"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
