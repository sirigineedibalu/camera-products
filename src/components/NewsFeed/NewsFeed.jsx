import React from "react";
import "./NewsFeed.css";
import { Newsfeed } from "../Data/Newsfeed";
import { Link } from "react-router-dom";
export const NewsFeed = ({ getIdFromNewsFeed }) => {
  const onBtnClickGetId = (id) => {
    console.log(id);
    getIdFromNewsFeed(id);
  };

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
          {Newsfeed.map((i, key) => (
            <div key={key} className="news-main-dta">
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
                    // height: "180px",
                    overflow: "scroll",
                  }}
                >
                  {i.des}
                </span>
              </div>
              <button className="btn1 " onClick={() => onBtnClickGetId(i?.id)}>
                <Link
                  style={{ textDecoration: "none", color: "red" }}
                  to="/Getdata"
                  // state={{ id: "occupation" }}
                  // to={{ pathname: "/Getdata", state: { id: i?.id } }}
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
