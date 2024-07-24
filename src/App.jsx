import NavBar from "./components/header/NavBar";
import Title from "./components/header/Title";
import { Header } from "./styles/AppStyle";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title/>
        <NavBar/>
      </Header>
    </>
  );
}

export default App;
