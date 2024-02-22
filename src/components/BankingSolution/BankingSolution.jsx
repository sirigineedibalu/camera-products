import React, { useEffect, useRef, useState } from "react";
import "./BankingSolution.css";
import { SolutionBreifData } from "../Data/SolutionBreifData";
import { useLocation } from "react-router-dom";

const BankingSolution = () => {
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  const scroll = useRef();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
    const filterData = SolutionBreifData.filter(
      (each) => each.id === data?.name
    );
    setFilterData(filterData);
  }, []);

  return (
    <div ref={scroll}>
      <div className="bank-img-heading">
        <div className="bank-img-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src="Images/1510x139.jpg"
            alt=""
          />
        </div>
      </div>{" "}
      {filterData?.map((i) => (
        <div className="bank-support-container">
          <div className="bank-heading">
            <h4>
              <center>Solutions/{i.name}</center>
            </h4>
          </div>
          <div className="bank-hero-container">
            <span>{i.span1}</span>
            <span>{i.span2}</span>
          </div>
          <div className="bank-side-images-main">
            <div className="bank-side-images">
              <img
                style={{ width: "100%", height: "200px" }}
                src={i.image1}
                alt=""
              />
            </div>
            <div className="bank-side-images-slides">
              <img
                style={{ width: "50%", height: "200px" }}
                src={i.image2}
                alt=""
              />
              <img
                style={{ width: "50%", height: "200px" }}
                src={i.image3}
                alt=""
              />
            </div>
          </div>
          <div className="bank-challenges-Solution-list">
            <div>
              <h2 id="heading-background">Challenges</h2>
              <li>{i.l1}</li>
              <li>{i.l2}</li>
              <li>{i.l3}</li>
              <li>{i.l4}</li>
              <li>{i.l5}</li>
              <li>{i.l6}</li>
              <li>{i.l7}</li>
              <li>{i.l8}</li>
            </div>
            <div>
              <h2 id="heading-background">Solution</h2>
              <li>{i.r1}</li>
              <li>{i.r2}</li>
              <li>{i.r3}</li>
              <li>{i.r4}</li>
              {/* <li>{i.r5}</li>
              <li>{i.r6}</li> */}
            </div>
          </div>
          <div className="bank-solutions-image-div">
            <img
              style={{ width: "100%", height: "100%" }}
              src={i.overviewimage}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankingSolution;
