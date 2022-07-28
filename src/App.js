import { Routes, Route } from "react-router-dom";

import TopFixedBar from "./common/components/TopFixedBar";
import MenuBar from "./common/components/MenuBar";

import HomePages from "./pages/components/HomePages";
import ProductDetailsPage from "./pages/components/ProductDetailsPage";

function App() {
  return (
    <div>
      <TopFixedBar />
      <MenuBar />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
