import "./App.css";
import { Courosual } from "./components/Courosual/Courosual";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MiddleBar } from "./components/MiddleBar/MiddleBar";
import { MointorEveryMoment } from "./components/MointorEveryMoment/MointorEveryMoment";
import { NewProducts } from "./components/NewProducts/NewProducts";
import { Trendingproducts } from "./components/Trendingproducts/Trendingproducts";

function App() {
  return (
    <div>
      <Header />
      <Courosual />
      <MiddleBar />
      <NewProducts />
      <MointorEveryMoment />
      <Trendingproducts />
      <Footer />
    </div>
  );
}

export default App;
