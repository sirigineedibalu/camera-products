import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  return (
    <div className="footer-full">
      <div className="footer-img-logo">
        <img
          style={{ width: "150px", height: "100px" }}
          src="Images/trinai.png"
          alt=""
        />
      </div>
      <div className="footer-total-container">
        <div>
          <h4>Products</h4>
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
        <div className="footer-information-con">
          <h4>Informations</h4>
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
          <h4>Contact Info</h4>
          <div className="footer-contact-info">
            <span>
              <FaPhone size={22} style={{ marginRight: "12px" }} />
              <b>Toll Free Number</b>
            </span>
            <span>0990916376374</span>
            <span>
              <TfiEmail size={22} style={{ marginRight: "12px" }} />
              <b>Email</b>
            </span>
            <span>Brihaspathitechnologies.com</span>
            <span>Trinai@brihaspathi.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
