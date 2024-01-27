import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  const [isProductsDropdownVisible, setProductsDropdownVisibility] =
    useState(false);

  const handleProductsMouseEnter = () => {
    setProductsDropdownVisibility(true);
  };

  const handleProductsMouseLeave = () => {
    setProductsDropdownVisibility(false);
  };

  return (
    <div>
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
          <div className="header--listitems-con">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Aboutus"
            >
              <span>About </span>
            </Link>
            <div
              className="header-dropdown"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <span>
                Products
                <IoIosArrowDown />
              </span>
              {isProductsDropdownVisible && (
                <div className="header-dropdown-content">
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/NetworkingCameras"
                    >
                      Network Cameras
                    </Link>
                  </span>
                  <span>Network Video Recorders</span>
                  <span>HD Analog Cameras</span>
                  <span>HD DVRs</span>
                  <span>Network Storage</span>
                  <span>Codecs</span>
                  <span>Accessories</span>
                  <span>Client Software</span>
                  <span>Phasing Out</span>
                </div>
              )}
            </div>
            <span>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Solutions"
              >
                Solutions
              </Link>
            </span>
            <span>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/News-Feed"
              >
                News&Feed
              </Link>
            </span>
            <span>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Support"
              >
                Support
              </Link>
            </span>
            <div
              className="header-dropdown"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <span>
                My account <IoIosArrowDown />
              </span>
              {isProductsDropdownVisible && (
                <div className="header-dropdown-content">
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/Loginpage"
                    >
                      Login
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/RegisterForm"
                    >
                      New Register
                    </Link>
                  </span>
                </div>
              )}
            </div>
            <span>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Contactus"
              >
                Contact Us
              </Link>
            </span>
          </div>
          <div className="header-search-main">
            <input
              className="header-search-item"
              type="text"
              placeholder="Search Here"
            />
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
