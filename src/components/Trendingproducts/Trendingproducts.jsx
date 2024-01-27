import "./Trendingproducts.css";
import { Products } from "../Data/Newproducts";
import { Link } from "react-router-dom";
export const Trendingproducts = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>
        TRENDING PRODUCTS{" "}
      </h2>
      <div className="trendprod-container">
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
              </Link>
              <span style={{ color: "blue" }}>{i.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
