import "./App.css";
import { Aboutus } from "./components/Aboutus/Aboutus";
import { ContactUs } from "./components/Contactus/Contactus";
import { Courosual } from "./components/Courosual/Courosual";
import { Header } from "./components/Header/Header";
import { NewProducts } from "./components/NewProducts/NewProducts";
import { Loginpage } from "./components/Loginpage/Loginpage";
import { MiddleBar } from "./components/MiddleBar/MiddleBar";
import { MointorEveryMoment } from "./components/MointorEveryMoment/MointorEveryMoment";
import { NetworkingCameras } from "./components/NetworkingCameras/NetworkingCameras";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { Newspage } from "./components/Newspage/Newspage";
import { Product } from "./components/Product/Product";
import RegisterForm from "./components/Registerform/Registerform";
import { Solutions } from "./components/Solutions/Solutions";
import { Support } from "./components/Support/Support";
import { Trendingproducts } from "./components/Trendingproducts/Trendingproducts";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import NetworkVideoRec from "./components/NetworkVideoRec/NetworkVideoRec";
import HDAnalog from "./components/HDAnalog/HDAnalog";
import HDdvrs from "./components/HDdvrs/HDdvrs";
import NetworkStorage from "./components/NetworkStorage/NetworkStorage";
import Codec from "./components/Codec/Codec";
import { ClientSoftware } from "./components/ClientSoftware/ClientSoftware";
import { Accesories } from "./components/Accesories/Accesories";
import CommonCompo from "./components/CommonCompo/CommonCompo";
import BankingSolution from "./components/BankingSolution/BankingSolution";
import { useState } from "react";

// import { Oursolutions } from "./components/Oursolutions/Oursolutions";

function App() {
  const [newsFeddId, setNewsFeddId] = useState(null);

  const getIdFromNewsFeed = (id) => {
    setNewsFeddId(id);
  };

  return (
    <div className="header-margin-bottom">
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

                {/* <Oursolutions /> */}
              </>
            }
          />
          <Route path="/" element={<Header />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/NetworkingCameras" element={<NetworkingCameras />} />
          <Route path="/ProductDetails" element={<Product />} />
          <Route
            path="/News-Feed"
            element={<NewsFeed getIdFromNewsFeed={getIdFromNewsFeed} />}
          />
          <Route path="/Support" element={<Support />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/ProductDetails" element={<NetworkingCameras />} />
          <Route
            path="/Getdata"
            element={<Newspage newsFeddId={newsFeddId} />}
          />
          <Route path="/NetworkingVideos" element={<NetworkVideoRec />} />
          <Route path="/HDAnalog" element={<HDAnalog />} />
          <Route path="/HDdvrs" element={<HDdvrs />} />
          <Route path="/NetworkStorage" element={<NetworkStorage />} />
          <Route path="/Codec" element={<Codec />} />
          <Route path="/ClientSoftware" element={<ClientSoftware />} />
          <Route path="/Accessories" element={<Accesories />} />
          <Route path="/ProductDetails" element={<CommonCompo />} />
          <Route path="/BankingSolutions" element={<BankingSolution />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Others" element={<CommonCompo />} />
        </Routes>
        <Footer />
      </Routers>
    </div>
  );
}

export default App;
