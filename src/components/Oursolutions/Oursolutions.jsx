import { Link } from "react-router-dom";
import { Oursolution } from "../Data/Oursolutions";
import "./Oursolutions.css";

export const Oursolutions = () => {
  return (
    <div className="o-s-container-main">
      <img
        className="ossoul-backgroundimg-con"
        src="https://cricclubs.com/documentsRep/teamLogos/3abddbcb-df4c-4f4a-80de-c7c91295984d.jpg"
        alt=""
      />
      <div className="oursolu-maindiv-con">
        <h4>
          <i>OUR SOLUTIONS</i>
        </h4>
        <p>
          Trinai brings intelligent security and surveillance solutions that
          protect people, properties and assets. They ensure safety, security
          and productivity in various industrial processes and help make the
          world safer. Our integrated security systems have been used in various
          situations and they deliver comprehensive coverage.
        </p>

        <div className="our-sol-main-con">
          {Oursolution.map((i) => (
            <div className="Our-solution-con">
              <div
                id="icon-style"
                style={{ marginRight: "12px", padding: "2px" }}
              >
                {i.icon}
              </div>
              <div className="our-sol-matter">
                <h5>{i.name}</h5>
                <span>{i.des}</span>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/BankingSolutions"
                >
                  <span>Explore..</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
