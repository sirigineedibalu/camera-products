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
      <h1>
        <b>Trending Products</b>
      </h1>
      <div id="secondpare" className="trendprod-container">
        {Products.map((i) => (
          <div className="trend-main-imgcon">
            <span style={{ color: "rgb(0, 172, 252)" }}>2 MP</span>
            <div className="trend-img-conta">
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
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
