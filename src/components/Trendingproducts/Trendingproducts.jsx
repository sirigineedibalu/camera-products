import { Link } from "react-router-dom";
import { Products } from "../Data/Newproducts";
import "./Trendingproducts.css";
import { useEffect } from "react";

export const Trendingproducts = () => {
  useEffect(() => {
    const slider = document.getElementById("secondpare");

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
    <div className="trend__product__main__card">
      <h1>Trending Products</h1>
      <div id="secondpare" className="trendprod-container">
        {Products.map((i) => (
          <div className="trend-main-imgcon">
            <div className="trend-img-conta">
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
