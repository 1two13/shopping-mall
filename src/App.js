import { Routes, Route } from "react-router-dom";

import TopFixedBar from "./common/components/TopFixedBar";
import MenuBar from "./common/components/MenuBar";

import HomePage from "./pages/components/HomePage";
import ProductDetailsPage from "./pages/components/ProductDetailsPage";

function App() {
  return (
    <div>
      <TopFixedBar />
      <MenuBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
