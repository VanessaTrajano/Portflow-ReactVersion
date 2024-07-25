import Facebook from "../../images/facebook.png"
import Twitter from "../../images/twitter.png"
import Instagram from "../../images/instagram.png"
import Telegram from "../../images/telegram.png"
import Whatsapp from "../../images/whatsapp.png"
import Youtube from "../../images/youtube.png"
import { SocialMediaImages } from "../../styles/FooterStyle"

function SocialMedia() {

    return (
      <SocialMediaImages>
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={Instagram} alt="instagram" />
        <img src={Telegram} alt="telegram" />
        <img src={Whatsapp} alt="whatsapp" />
        <img src={Youtube} alt="youtube" />
      </SocialMediaImages>
    )
  }
  
  export default SocialMedia
  