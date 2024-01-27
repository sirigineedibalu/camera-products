import { Link } from "react-router-dom";
import { Products } from "../Data/Newproducts";
import "./NewProducts.css";

export const NewProducts = () => {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>NEW PRODUCTS </h2>
      <div className="newprod-container">
        {/* <div className="new__pro__cot"> */}
        {Products.map((i) => (
          <div className="new-main-imgcon">
            <div className="new-img-conta">
              <Link to="/productDetails">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                  }}
                  src={i.image}
                  alt=""
                />
              </Link>{" "}
              <span style={{ color: "blue" }}>{i.name}</span>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};
