import { Link } from "react-router-dom";
import { Products } from "../Data/Newproducts";
import "./NewProducts.css";
import { useEffect } from "react";

export const NewProducts = () => {
  useEffect(() => {
    const slider = document.getElementById("parent");

    let mouseDown = false;
    let startX, scrollLeft;

    const startDragging = (e) => {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = (e) => {
      mouseDown = false;
    };

    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };

    // Add the event listeners
    slider.addEventListener("mousemove", move, false);
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  });

  return (
    <div className="new__product__main__card">
      <h1>
        <b>NEW PRODUCTS</b>
      </h1>
      <div id="parent" className="newprod-container">
        {Products.map((i) => (
          <div className="new-main-imgcon">
            <span style={{ color: "rgb(7, 124, 173)" }}>2 MP</span>
            <div className="new-img-conta">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={i.image}
                alt=""
              />
            </div>
            <Link
              style={{ color: "#077cad", textDecoration: "none" }}
              to="/productDetails"
            >
              <div>
                <span>{i.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
