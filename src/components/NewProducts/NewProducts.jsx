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
      <h2>NEW PRODUCTS</h2>
      <div id="parent" className="newprod-container">
        {Products.map((i) => (
          <div className="new-main-imgcon">
            <div className="new-img-conta">
              <Link to="/productDetails">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                  }}
                  src={i.image}
                  alt=""
                />
              </Link>{" "}
              <span style={{ color: "blue" }}>{i.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
