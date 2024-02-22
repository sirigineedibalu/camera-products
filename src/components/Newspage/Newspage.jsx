import React, { useEffect, useRef, useState } from "react";
import "./Newspage.css";
import { Newspagedata } from "../Data/Newspagedata";
export const Newspage = ({ newsFeddId }) => {
  const [id, setId] = useState(null);

  const [data, setData] = useState([]);

  const refValue = useRef();

  if (newsFeddId) {
    localStorage.setItem("id", newsFeddId);
  }
  // useCallback(() => {
  //   console.log(newsFeddId);
  // }, [newsFeddId]);

  useEffect(() => {
    let value = localStorage.getItem("id");
    // console.log(value);
    setId(value);
  }, []);

  useEffect(() => {
    let filterDate;
    if (id) {
      // console.log(id);
      filterDate = Newspagedata.filter((each) => each.id === id);
      // console.log(filterDate);
      setData(filterDate);
    } else {
      filterDate = Newspagedata.filter((each) => each.id === newsFeddId);
      setData(filterDate);
    }
  }, [id]);

  useEffect(() => {
    const section = document.getElementById("sectionId");
    section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div id="sectionId" className="main-news-page" ref={refValue}>
      <div className="np-img-container">
        <img
          style={{ width: "100%", height: "100%" }}
          src="Images/Sliders/news feed.jpg"
          alt=""
        />
      </div>

      {data.length ? (
        <>
          {data?.map((each, key) => (
            <div key={key} className="pg-heaader-div">
              <div className="pg-hero-container">
                <div className="np-fedd-data">
                  <div>
                    <h1 id="nph4heading">
                      <b>{each.Heading}</b>
                    </h1>
                    <span>{each.Des1}</span>
                    <span>{each.Des2}</span>
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    <h4 id="nph4heading">{each.heading1}</h4>
                    <span>{each.Span1}</span>
                  </div>
                </div>
                <div className="np-img-div">
                  <img
                    style={{ width: "100%", borderRadius: "2px 28px" }}
                    src={each.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="np-middle-container">
                <h4 id="nph4heading">{each.heading2}</h4>
                <span>{each.Span2}</span>
                <h4 id="nph4heading">{each.heading3}</h4>
                <span>{each.Span3}</span>
                <span>{each.Span4}</span>
                <span>{each.span5}</span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>Not data Found</div>
      )}
    </div>
  );
};
