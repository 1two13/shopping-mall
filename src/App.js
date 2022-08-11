import { Routes, Route } from "react-router-dom";

import TopFixedBar from "./common/components/TopFixedBar";
import MenuBar from "./common/components/MenuBar";

import HomePage from "./pages/components/HomePage";
import ProductDetailsPage from "./pages/components/ProductDetailsPage";
import CheckoutPage from "./pages/components/CheckoutPage";

function App() {
  return (
    <div>
      <TopFixedBar />
      <MenuBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
