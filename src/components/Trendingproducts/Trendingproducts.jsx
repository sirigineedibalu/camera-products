import "./Trendingproducts.css";
import { Products } from "../Data/Newproducts";
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
              <img
                style={{
                  width: "100%",
                  height: "70%",
                }}
                src={i.image}
                alt=""
              />

              <span>{i.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
