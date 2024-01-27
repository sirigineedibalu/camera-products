import React from "react";
import "./NewsFeed.css";
import { Newsfeed } from "../Data/Newsfeed";
export const NewsFeed = () => {
  return (
    <div className="news-head-container">
      <div className="news-img-div">
        <h1 id="h2heading">News-Feed</h1>
      </div>
      <div className="news-middle-container">
        <div className="news-loop-method">
          {Newsfeed.map((i) => (
            <div className="news-main-dta">
              <div className="news-data-img">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                  src={i.image}
                  alt=""
                />
              </div>

              <div className="news-matter-div">
                <h5 id="h5heading">{i.name}</h5>
                <span style={{ height: "150px", overflow: "hidden" }}>
                  {i.des}
                </span>
                <button className="btn1 ">Read more..</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
