import Copyright from "./components/footer/Copyright";
import SocialMedia from "./components/footer/SocialMedia";
import NavBar from "./components/header/NavBar";
import Title from "./components/header/Title";
import Banner from "./components/main/Banner";
import Images from "./components/main/Images";
import { Footer, Header, Main } from "./styles/AppStyle";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title/>
        <NavBar/>
      </Header>
      <Main>
        <Banner/>
        <Images/>
      </Main>
      <Footer>
        <SocialMedia/>
        <Copyright/>
      </Footer>
    </>
  );
}

export default App;
