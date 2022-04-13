import { Home, Product, Auction, DashBoard, Checkout, Error } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="auction" element={<Auction />} />
        <Route path="dashBoard" element={<DashBoard />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
