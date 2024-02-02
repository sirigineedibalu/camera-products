import React from "react";
import "./NewsFeed.css";
import { Newsfeed } from "../Data/Newsfeed";
import { Link } from "react-router-dom";
export const NewsFeed = () => {
  return (
    <div className="news-head-container">
      <div className="news-img-div">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/Sliders/news feed.jpg"
          alt=""
        />
      </div>
      <div className="news-middle-container">
        <div className="news-loop-method">
          {Newsfeed.map((i) => (
            <div className="news-main-dta">
              <div className="news-data-img">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px 30px",
                  }}
                  src={i.image}
                  alt=""
                />
              </div>

              <div className="news-matter-div">
                <h5 id="h5heading">{i.name}</h5>
                <span
                  style={{
                    height: "150px",
                    overflow: "scroll",
                  }}
                >
                  {i.des}
                </span>
              </div>
              <button className="btn1 ">
                <Link
                  style={{ textDecoration: "none", color: "red" }}
                  to="/Getdata"
                >
                  Read more..
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
