/** @format */

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/src/components/Cart.js' element={<Cart />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
