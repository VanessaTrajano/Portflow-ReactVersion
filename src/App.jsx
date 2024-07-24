import NavBar from "./components/header/NavBar";
import Title from "./components/header/Title";
import Banner from "./components/main/Banner";
import Images from "./components/main/Images";
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
      <main>
        <Banner/>
        <Images/>
      </main>
    </>
  );
}

export default App;
