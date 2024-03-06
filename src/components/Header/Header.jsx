import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

import "./Header.css";

export const Header = () => {
  const [isProductsDropdownVisible, setProductsDropdownVisibility] =
    useState(false);
  const [visible, setVisible] = useState(false);
  const [myAccountShow, setMyAccountShow] = useState(false);
  const [notHover, setNotHover] = useState(false);
  let [hover, setHover] = useState(false);

  const handleProductsClick = () => {
    console.log("ghjk");
    setProductsDropdownVisibility(!isProductsDropdownVisible);
  };

  const handleDisplay = () => {
    setVisible(!visible);
  };

  const onMyAccountShowDropDown = () => {
    setMyAccountShow(!myAccountShow);
  };

  const onMobileSubListShow = () => {
    hover = !notHover;
    setHover(hover);
    setNotHover(hover);
  };

  console.log(isProductsDropdownVisible);
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
              style={{
                marginRight: "20px",
              }}
              src="Images/trinai-02.png"
              alt=""
              className="logo-img"
            />
          </Link>
        </div>
        <div className="header-sublist-container">
          <div
            id="display"
            className={`header--listitems-con ${visible ? "menu-open" : ""}`}
          >
            <NavLink
              id="header-color"
              activeClassName="active"
              style={{
                textDecoration: "none",
                padding: "10px",
                marginLeft: "20px",
              }}
              to="/Aboutus"
            >
              <span>About </span>
            </NavLink>
            <div style={{ padding: "10px" }} className="header-dropdown">
              <span
                onClick={handleProductsClick}
                id="header-color"
                style={{ padding: "10px" }}
              >
                Products
                <IoIosArrowDown />
              </span>

              {isProductsDropdownVisible && (
                <div className="header-dropdown-content">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/NetworkingCameras"
                  >
                    <span>IP Cameras</span>{" "}
                  </Link>

                  <Link
                    style={{ textDecoration: "none" }}
                    to="/NetworkingVideos"
                  >
                    <span>NVRs </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/HDAnalog">
                    <span>Analog Cameras </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/HDdvrs">
                    <span>DVRs </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/NetworkStorage">
                    <span>Network Storage </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/Codec">
                    <span>Switches </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/Accessories">
                    <span>Accessories </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/ClientSoftware">
                    <span>Client Software </span>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/Others">
                    <span>Others</span>
                  </Link>
                </div>
              )}
            </div>
            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Solutions"
            >
              <span> Solutions </span>
            </NavLink>

            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/News-Feed"
            >
              <span> News&Events</span>
            </NavLink>

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
                    <span>New Register</span>
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Contactus"
            >
              <span> Contact Us</span>
            </NavLink>
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
        </div>
        {visible && (
          <div className="header-hamb-content">
            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Aboutus"
            >
              <span onClick={handleDisplay}>About</span>
            </NavLink>
            {/* <Link
                style={{ textDecoration: "none" }}
                to="/NetworkingCameras"
              > */}
            <div onClick={onMobileSubListShow} className="prodtxcvghj">
              <span id="products-hover">Products</span>{" "}
            </div>
            {hover && (
              <div className="header-hover-display-list">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/NetworkingCameras"
                >
                  <span onClick={handleDisplay}>IP Cameras</span>{" "}
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/NetworkingVideos"
                >
                  <span onClick={handleDisplay}>NVRs </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/HDAnalog"
                >
                  <span onClick={handleDisplay}>Analog Cameras </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/HDdvrs"
                >
                  <span onClick={handleDisplay}>DVRs </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/NetworkStorage"
                >
                  <span onClick={handleDisplay}>Network Storage </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Codec"
                >
                  <span onClick={handleDisplay}>Switches </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Accessories"
                >
                  <span>Accessories </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ClientSoftware"
                >
                  <span onClick={handleDisplay}>Client Software </span>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Others"
                >
                  <span onClick={handleDisplay}>Others</span>
                </Link>
              </div>
            )}
            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Solutions"
            >
              <span onClick={handleDisplay}>Solution</span>
            </NavLink>
            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/News-Feed"
            >
              <span onClick={handleDisplay}> News&Events</span>
            </NavLink>

            <NavLink
              id="header-color"
              style={{
                color: "#232323",
                padding: "8px",
                textDecoration: "none",
              }}
              to="/Support"
            >
              <span onClick={handleDisplay}> Support</span>
            </NavLink>
            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
                // color: "black",
              }}
              to="/Loginpage"
            >
              <span onClick={handleDisplay}>Login </span>
            </NavLink>
            <NavLink
              id="header-color"
              style={{
                textDecoration: "none",
                color: "#232323",
                padding: "8px",
              }}
              to="/Contactus"
            >
              <span onClick={handleDisplay}> Contact Us</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
