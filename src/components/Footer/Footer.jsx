import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  const productList = [
    "IP Cameras",
    "NVRs",
    "Analog Cameras",
    "DVRs",
    "Network Storage",
    "Switches",
    "Accessories",
    "Client Software",
    "Others",
  ];
  const informationList = [
    "About us",
    "Solutions",
    "News & Events",
    "Support",
    "Contact Us",
  ];
  const contactInfo = {
    phone: ["9885888835", "9676031111", "92686 22222"],
    emails: ["www.brihaspathi.com", "www.trinai.com"],
  };
  return (
    <div>
      <div className="footer-full">
        <div className="footer-img-logo">
          <img
            id="icon-style"
            style={{ width: "100%", height: "100%" }}
            src="Images/trinai white.png"
            alt=""
          />
        </div>
        <div className="footer-total-container">
          <div className="footer-toooo-coo">
            <h2>Products</h2>
            <div className="footer-product-con">
              <div className="footer-span-product">
                {productList.map((product, index) => (
                  <span key={index}>{product}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-side-div-container">
            <div className="footer-information-con">
              <h2>Informations</h2>
              <div className="footer-span-con">
                {informationList.map((info, index) => (
                  <span key={index}>{info}</span>
                ))}
              </div>
            </div>
            <div className="footer-contactus">
              <h2>Contact Info</h2>
              <div className="footer-contact-info">
                <div className="footer-contat-End--container">
                  <span>
                    <FaPhone
                      id="icon-style"
                      size={22}
                      style={{ marginRight: "12px" }}
                    />
                    <b>Toll Free Number</b>
                  </span>
                  {contactInfo.phone.map((phone, index) => (
                    <span key={index}>{phone}</span>
                  ))}
                </div>
                <div className="footer-contat-End--container">
                  <span>
                    <TfiEmail
                      id="icon-style"
                      size={22}
                      style={{ marginRight: "12px" }}
                    />
                    Email
                  </span>
                  {contactInfo.emails.map((email, index) => (
                    <span key={index}>{email}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-container">
        <span>
          Copyright © 2024 Trinai. All Rights Reserved, Site by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(177, 171, 171)" }}
            href="https://www.brihaspathi.com/"
          >
            Brihaspathi Technologies Pvt Ltd
          </a>
        </span>
      </div>
    </div>
  );
};
