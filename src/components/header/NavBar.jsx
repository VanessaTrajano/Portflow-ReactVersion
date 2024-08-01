import { NavigationBar, HamburguerMenu } from "../../styles/HeaderStyle"
import MenuImage from "../../images/menu.jpg"

function NavBar() {

    return (
      <>
        <HamburguerMenu>
          <img src={MenuImage}/>
        </HamburguerMenu>
        <NavigationBar>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Valores</li>
            <li>Portfólio</li>
            <li>Contato</li>
          </ul>
        </NavigationBar>
      </>
    )
  }
  
  export default NavBar
  