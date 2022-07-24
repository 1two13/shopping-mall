import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import TopFixedBar from "./components/TopFixedBar";
import MenuBar from "./components/MenuBar";

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TopFixedBar />
      <MenuBar />
    </div>
  );
}

export default App;
