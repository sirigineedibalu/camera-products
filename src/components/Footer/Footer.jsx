import React from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  const productList = [
    "Network Cameras",
    " Network Video Recorders",
    "HD Analog Cameras",
    "HD DVRs",
    "Network Storage",
    "Codecs",
    "Accessories",
    "Client Software",
  ];
  const informationList = [
    "About us",
    "Solutions",
    "News & Events",
    "Support",
    "Contact Us",
  ];
  const contactInfo = {
    phone: ["040-66143344", "040-66440002", "040-66440003"],
    emails: ["Brihaspathitechnologies.com", "Trinai@brihaspathi.com"],
  };
  return (
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
  );
};

// export default Footer;
