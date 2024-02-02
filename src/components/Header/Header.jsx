import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

export const Header = () => {
  const [isProductsDropdownVisible, setProductsDropdownVisibility] =
    useState(false);
  // const [isvisible, setIsVisible] = useState(false);
  let [visible, setVisible] = useState(false);

  const handleProductsMouseEnter = () => {
    setProductsDropdownVisibility(true);
  };
  const handleProductsMouseLeave = () => {
    setProductsDropdownVisibility(false);
  };
  const handleDisplay = () => {
    setVisible(true);
  };
  const handleNotDisplay = () => {
    setVisible(false);
    console.log(visible + "---->after click");
  };

  // const display = () => {
  //   const value1 = document.getElementById("display");
  //   // document.value1.style.display = "block";
  //   console.log(value1);
  // };

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
          <div id="display" className="header--listitems-con">
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
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/NetworkingVideos"
                    >
                      Network Video Recorders
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/HDAnalog"
                    >
                      HD Analog Cameras
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/HDdvrs"
                    >
                      HD DVRs
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/NetworkStorage"
                    >
                      Network Storage
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/Codec"
                    >
                      Codecs
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/Accessories"
                    >
                      Accessories
                    </Link>
                  </span>
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/ClientSoftware"
                    >
                      Client Software
                    </Link>
                  </span>
                  {/* <span>Phasing Out</span> */}
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
                News&Events{" "}
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
        <div
          className="header-hamb-icon"
          onClick={handleDisplay}
          // onMouseLeave={handleNotDisplay}
        >
          <span>
            <RxHamburgerMenu />
          </span>
          {visible && (
            <div className="header-hamb-content">
              <span style={{ border: "1px solid red" }}>
                <MdOutlineCancel size={22} onClick={handleNotDisplay} />
              </span>
              <span>About</span>
              <span>Products</span>
              <span>Solution</span>
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
