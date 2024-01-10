import { Products } from "../Data/Newproducts";
import "./NewProducts.css";

export const NewProducts = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "20px" }}>NEW PRODUCTS </h2>
      <div className="newprod-container">
        {Products.map((i) => (
          <div className="new-main-imgcon">
            <div className="new-img-conta">
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
