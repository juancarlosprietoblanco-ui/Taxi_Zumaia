import {
  SliderTaxi,
  SliderTaxiP,
  // ElectionService,
  // MainImgElectionService,
  // FormHome,
  // MainImgDiv,
  StyledSliderTaxiH2,
  SliderTaxiTitle,
  ButtonWhatssap,
  ButtonEmail,
  ButtonCall,
  ButtonContainer,
} from "./style";

import OurServices from "../../components/OurServices";
import Tariffs from "../../components/Tariffs";
import PhoneIcon from "../../assets/svg/Phone";
import EmailIcon from "../../assets/svg/email";
import WhatsAppIcon from "../../assets/svg/Whatsapp";

import { useEffect, useState } from "react";
import Information from "../../components/Information";
import ElectionService from "../../components/ElectionService";

const Home = () => {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => (prev + 1) % texts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const texts = ["Donde", "Cuándo", "Quién"];

  const handleCall = () => {
    window.location.href = "tel:+34623565614";
  };

  const handleWhatsapp = () => {
    // Puedes utilizar un enlace con el prefijo "https://wa.me/" para abrir WhatsApp
    window.open("https://wa.me/+34623565614", "_blank");
  };

  const handleEmail = () => {
    // Puedes utilizar un enlace con el prefijo "mailto:" para abrir la aplicación de correo
    window.location.href = "mailto:juancarlos.blazquezv@gmail.com";
  };

  return (
    <>
      <SliderTaxi>
        <SliderTaxiTitle>
          <SliderTaxiP>¿ TE LLEVAMOS ? </SliderTaxiP>
          {texts.map((text, index) => (
            <StyledSliderTaxiH2
              key={index}
              style={{ display: index === showText ? "block" : "none" }}
            >
              ddd {text}
            </StyledSliderTaxiH2>
          ))}
        </SliderTaxiTitle>
        <ButtonContainer>
          <ButtonCall onClick={handleCall}>
            <PhoneIcon /> +34 623 565 614
          </ButtonCall>
          <ButtonWhatssap onClick={handleWhatsapp}>
            <WhatsAppIcon></WhatsAppIcon> WhatsApp
          </ButtonWhatssap>
          <ButtonEmail onClick={handleEmail}>
            <EmailIcon></EmailIcon>
            Email
          </ButtonEmail>
        </ButtonContainer>
      </SliderTaxi>
      <ElectionService />
      <Information />
      <OurServices />
      <Tariffs />
    </>
  );
};

export default Home;
