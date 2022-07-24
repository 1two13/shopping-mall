import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import TopFixedBar from "./components/TopFixedBar";

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TopFixedBar />
    </div>
  );
}

export default App;
