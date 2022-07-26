import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import TopFixedBar from "./common/components/TopFixedBar";
import MenuBar from "./common/components/MenuBar";

import BigAnimatePic from "./home/components/BigAnimatePic";
import HomeProductsList from "./home/components/HomeProductsList";

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <TopFixedBar />
      <MenuBar />

      <BigAnimatePic />
      <HomeProductsList />
    </div>
  );
}

export default App;
