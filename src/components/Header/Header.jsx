import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowDropleft } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

import "./Header.css";

export const Header = () => {
  const [isProductsDropdownVisible, setProductsDropdownVisibility] =
    useState(false);
  const [visible, setVisible] = useState(false);
  const [myAccountShow, setMyAccountShow] = useState(false);

  const [hover, setHover] = useState(false);

  const handleProductsClick = () => {
    setProductsDropdownVisibility(!isProductsDropdownVisible);
  };

  const handleDisplay = () => {
    setVisible(!visible);
  };

  const onMyAccountShowDropDown = () => {
    setMyAccountShow(!myAccountShow);
  };

  const MouseEnter = () => {
    setHover(hover);
    console.log(hover);
  };
  const Mouseleave = () => {
    setHover(hover);
    console.log(!hover);
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className="header-main-container">
        <div className="header-img-container">
          <Link to="/">
            <img
              style={{ width: "100px", height: "100px", padding: "20px 10px" }}
              src="Images/trinai.png"
              alt=""
            />
          </Link>
        </div>
        <div className="header-sublist-container">
          <div
            id="display"
            className={`header--listitems-con ${visible ? "menu-open" : ""}`}
          >
            <Link
              id="header-color"
              activeClassName="active"
              style={{ textDecoration: "none", padding: "10px" }}
              to="/Aboutus"
            >
              <span>About </span>
            </Link>
            <div
              style={{ padding: "10px" }}
              className="header-dropdown"
              onClick={handleProductsClick}
            >
              <span id="header-color" style={{ padding: "8px" }}>
                Products
                <IoIosArrowDown />
              </span>
              {isProductsDropdownVisible && (
                <div className="header-dropdown-content">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/NetworkingCameras"
                  >
                    <span>Network Cameras</span>{" "}
                  </Link>

                  <Link
                    style={{ textDecoration: "none" }}
                    to="/NetworkingVideos"
                  >
                    <span>Network Video Recorders </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/HDAnalog">
                    <span>HD Analog Cameras </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/HDdvrs">
                    <span>HD DVRs </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/NetworkStorage">
                    {" "}
                    <span>Network Storage </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/Codec">
                    {" "}
                    <span>Codecs </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/Accessories">
                    {" "}
                    <span>Accessories </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/ClientSoftware">
                    {" "}
                    <span>Client Software </span>
                  </Link>

                  {/* <span>Phasing Out</span> */}
                </div>
              )}
            </div>

            <Link
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "10px",
              }}
              to="/Solutions"
            >
              <span> Solutions </span>
            </Link>

            <Link
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/News-Feed"
            >
              <span> News&Events</span>
            </Link>

            <Link
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Support"
            >
              <span> Support</span>
            </Link>

            <div
              style={{ padding: "8px" }}
              onClick={onMyAccountShowDropDown}
              className="header-dropdown"
              // onMouseEnter={handleProductsMouseEnter}
              // onMouseLeave={handleProductsMouseLeave}
            >
              <span id="header-color" style={{ padding: "10px" }}>
                My account <IoIosArrowDown />
              </span>
              {myAccountShow && (
                <div className="header-dropdown-content">
                  <Link style={{ textDecoration: "none" }} to="/Loginpage">
                    <span>Login </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/RegisterForm">
                    {" "}
                    <span>New Register</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Contactus"
            >
              <span> Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="header-search-main">
          <input
            className="header-search-item"
            type="text"
            placeholder="Search Here"
          />
          <FaSearch />
        </div>
        <div className="header-hamb-icon" onClick={handleDisplay}>
          <span>
            {visible ? (
              <MdOutlineCancel size={22} />
            ) : (
              <RxHamburgerMenu size={22} />
            )}
          </span>
          {visible && (
            <div className="header-hamb-content" onClick={handleDisplay}>
              <Link style={{ textDecoration: "none" }} to="/Aboutus">
                <span>About</span>
              </Link>
              {/* <Link
                style={{ textDecoration: "none" }}
                to="/NetworkingCameras"
              > */}
              <div onMouseEnter={MouseEnter} onMouseLeave={Mouseleave}>
                {" "}
                <span id="products-hover">
                  <IoIosArrowDropleft />
                  Products
                </span>
                {hover && (
                  <div className="header-hover-display-list">
                    <span>Network Cameras</span>
                    <span>NetworkVideo Recorders</span>
                    <span>HD Analog Cameras</span>
                    <span>HD DVRs</span>
                    <span>Network Storage</span>
                    <span>Codecs</span>
                    <span>Accessories</span>
                    <span>Client Software</span>
                  </div>
                )}{" "}
              </div>
              <Link style={{ textDecoration: "none" }} to="/Support">
                <span>Solution</span>
              </Link>
              <span>News&Events</span>
              <span>Support</span>
              <span>My Account</span>
              <span>Contact Us</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
