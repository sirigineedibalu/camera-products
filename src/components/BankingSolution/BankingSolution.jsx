import React, { useEffect, useRef } from "react";
import "./BankingSolution.css";

const BankingSolution = () => {
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div ref={scroll}>
      <div className="bank-img-heading">
        <div className="bank-img-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.cpplusworld.com/assets/img/breadcrumb_bg.jpg"
            alt=""
          />
        </div>
        <div className="bank-heading">
          <h1>Banking</h1>
        </div>
      </div>
      <div className="bank-support-container">
        <div className="bank-hero-container">
          <span>
            India's banking sector is currently valued at Rs 81 trillion (US$
            1.31 trillion). And, has the potential to become the fifth largest
            banking industry in the world by 2020.
          </span>
          <span>
            The face of Indian banking has changed over the years. Banks are now
            reaching out to the masses with technology to facilitate greater
            ease of communication, as transactions are carried out through the
            Internet and mobile devices. All this has created the need for banks
            to meet their customers' requirements for security in a special way
            on many levels.
          </span>
        </div>
        <div className="bank-side-images-main">
          <div className="bank-side-images">
            <img
              style={{ width: "100%", height: "200px" }}
              src="https://www.cpplusworld.com/assets/img/solutions/banking-solution/banking_solution_img1.png"
              alt=""
            />
          </div>
          <div className="bank-side-images-slides">
            <img
              style={{ width: "50%", height: "200px" }}
              src="https://www.cpplusworld.com/assets/img/solutions/banking-solution/banking_solution_img2.png"
              alt=""
            />
            <img
              style={{ width: "50%", height: "200px" }}
              src="https://www.cpplusworld.com/assets/img/solutions/banking-solution/banking_solution_img3.png"
              alt=""
            />
          </div>
        </div>
        <div className="bank-challenges-Solution-list">
          <div>
            <h2>Challenges</h2>
            <li>High resolution video for post analysis</li>
            <li>Ensure safety of customers and employees</li>
            <li>Track transactions for bank and customer satisfaction</li>
            <li>Reliability of system</li>
            <li>Increase business efficiency and enhance customer service</li>
            <li>Incident Management</li>
            <li>Instant Reporting System</li>
            <li>Health monitoring at control room for system ability</li>
          </div>
          <div>
            <h2>Solution</h2>
            <li>
              High resolution cameras and DVR will record details of the
              suspicious persons
            </li>
            <li>Low light CCTV cameras will capture images in such area</li>
            <li>
              The proposed system will leverage existing analog camera base
            </li>
            <li>
              Introduction of network video surveillance to detect potential
              security threats
            </li>
          </div>
        </div>
        <div className="bank-solutions-image-div">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.cpplusworld.com/assets/img/solutions/banking-solution/banking_solution_img4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BankingSolution;
