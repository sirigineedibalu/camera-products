import { Link } from "react-router-dom";
import "./MointorEveryMoment.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const MointorEveryMoment = () => {
  return (
    <div className="mointor-main-img">
      <div className="monitor-back-page">
        <h1>
          <b>Monitor Every Moment</b>
        </h1>
        <span>
          Trinai is a Security Solutions Provider, We specialize in total
          integrated surveillance, Data Communication and Storage Solutions
          Trinai is a Security Solutions Provider, We specialize in total
          integrated surveillance, Data Communication and Storage Solutions
        </span>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/Solutions"
        >
          <button className="btn btn-danger">Read more</button>{" "}
        </Link>
      </div>
    </div>
  );
};
