import { Routes, Route } from "react-router-dom";

import TopFixedBar from "./common/components/TopFixedBar";
import MenuBar from "./common/components/MenuBar";

import HomePage from "./pages/components/HomePage";
import ProductDetailsPage from "./pages/components/ProductDetailsPage";
import CheckoutPage from "./pages/components/CheckoutPage";
import MyPage from "./pages/components/MyPage";
import AuthManager from "./common/components/AuthManager";
import Callback from "./common/components/Callback";

function App() {
  return (
    <AuthManager>
      <TopFixedBar />
      <MenuBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </AuthManager>
  );
}

export default App;
