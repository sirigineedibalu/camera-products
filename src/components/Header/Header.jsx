import "./Header.css";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      <div className="header-main-container">
        <div className="header-img-container">
          <img
            style={{ width: "100px", height: "60px", padding: "20px 10px" }}
            src="Images/trinai.png"
            alt=""
          />
        </div>
        <div className="header-sublist-container">
          <div className="header--listitems-con">
            <span>About Trinai</span>
            <span>Products</span>
            <span>Solutions</span>
            <span>News&Feed</span>
            <span>Support</span>
            <span>My account</span>
            <span>Contact</span>
          </div>
          <div className="header-search-main">
            <input
              className="header-search-item"
              type="text"
              placeholder="Search Here"
            />
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
