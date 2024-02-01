import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Products } from "../Data/Newproducts";

import "./Demo.css";

export const Demo = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = () => {
    if (containerRef.current && isHovered) {
      containerRef.current.scrollLeft += 2; // Adjust the scroll speed as needed
    }
  };

  return (
    <div>
      <h2 style={{ margin: "20px" }}>NEW PRODUCTS </h2>
      <div
        className="newprod-container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleScroll}
      >
        {Products.map((product, index) => (
          <div key={index} className="new-main-imgcon">
            <div className="new-img-conta">
              <Link to="/productDetails">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                  }}
                  src={product.image}
                  alt=""
                />
              </Link>{" "}
              <span style={{ color: "blue" }}>{product.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
