import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
// import { IoIosArrowForward } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="footer-full">
      <div className="footer-img-logo">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/trinai white.png"
          alt=""
        />
      </div>
      <div className="footer-total-container">
        <div className="footer-toooo-coo">
          <h2>
            Products
            {/* <IoIosArrowForward /> */}
          </h2>
          <div className="footer-product-con">
            <div className="footer-span-product">
              <span>Analog HD Cameras</span>
              <span>Network Cameras</span>
              <span>Network PTZ Cameras</span>
              <span>Network Video Recorder</span>
              <span>Network Switches</span>
            </div>
            <div className="footer-span-product1">
              <span>Smart Home Products</span>
              <span>Analog HD Recorders</span>
              <span>Accessories</span>
              <span>Time and Attendance System</span>
              <span>Discontinued Products</span>
            </div>
          </div>
        </div>
        <div className="footer-side-div-container">
          <div className="footer-information-con">
            <h2>
              {" "}
              Informations
              {/* <IoIosArrowForward /> */}
            </h2>
            <div className="footer-span-con">
              <span>About us</span>
              <span>Solutions</span>
              <span>News & Events</span>
              <span>Support</span>
              <span>Contact Us</span>
              <span></span>
            </div>
          </div>
          <div className="footer-contactus">
            <h2>
              {" "}
              Contact Info
              {/* <IoIosArrowForward /> */}
            </h2>
            <div className="footer-contact-info">
              <div className="footer-contat-End--container">
                <span>
                  <FaPhone size={22} style={{ marginRight: "12px" }} />
                  <b>Toll Free Number</b>
                </span>
                <span>0990916376374</span>
              </div>
              <div className="footer-contat-End--container">
                <h4>
                  <TfiEmail size={22} style={{ marginRight: "12px" }} />
                  <b>Email</b>
                </h4>
                <span>Brihaspathitechnologies.com</span>
                <span>Trinai@brihaspathi.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
