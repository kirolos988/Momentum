/** @format */

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import NoPage from "./components/NoPage/NoPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/src/components/Cart.jsx' element={<Cart />} />
          <Route
            path='/src/components/ProductDetails.jsx'
            element={<ProductDetails />}
          />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
