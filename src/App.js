import "./App.css";
import { Aboutus } from "./components/Aboutus/Aboutus";
import { ContactUs } from "./components/Contactus/Contactus";
import { Courosual } from "./components/Courosual/Courosual";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Loginpage } from "./components/Loginpage/Loginpage";
// import { Location } from "./components/Maps/Maps";
import { MiddleBar } from "./components/MiddleBar/MiddleBar";
import { MointorEveryMoment } from "./components/MointorEveryMoment/MointorEveryMoment";
import { NetworkingCameras } from "./components/NetworkingCameras/NetworkingCameras";
import { NewProducts } from "./components/NewProducts/NewProducts";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { Newspage } from "./components/Newspage/Newspage";
import { Oursolutions } from "./components/Oursolutions/Oursolutions";
import { Product } from "./components/Product/Product";
import RegisterForm from "./components/Registerform/Registerform";
import { Solutions } from "./components/Solutions/Solutions";
import { Support } from "./components/Support/Support";
import { Trendingproducts } from "./components/Trendingproducts/Trendingproducts";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Courosual />
                <NewProducts />
                <MiddleBar />
                <Trendingproducts />
                <MointorEveryMoment />
                <Oursolutions />
              </>
            }
          />
          <Route path="/" element={<Header />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/NetworkingCameras" element={<NetworkingCameras />} />
          <Route path="/ProductDetails" element={<Product />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/News-Feed" element={<NewsFeed />} />
          <Route path="/Support" element={<Support />} />
          {/* <Route path="/Monitorreadmore" element={<Solutions />} /> */}
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/ProductDetails" element={<NetworkingCameras />} />
          {/* <Location /> */}
        </Routes>
        <Newspage />
        <Footer />
      </Routers>
    </div>
  );
}

export default App;
