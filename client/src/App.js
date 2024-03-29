import { Home, Product, Auction, DashBoard, Checkout, Error } from './Pages'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPg from './Pages/LoginPage/LoginPg'

function App() {
  return (
    <div className="App overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<LoginPg />} />
        <Route path="product" element={<Product />} />
        <Route path="auction" element={<Auction />} />
        <Route path="dashBoard" element={<DashBoard />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
