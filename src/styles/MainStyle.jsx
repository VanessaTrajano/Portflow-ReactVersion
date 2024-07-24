import styled from "styled-components";
import ImagemLaranja from "../images/laranja-azul.png"

export const BannerContainer = styled.section`
    height:80vh;
    width: 100%;
    background-size:100% 100%;
    background-image: url(${ImagemLaranja});
    position:relative;
    color: #fff0ff;
`

export const BannerTitle = styled.h2`
    font-size: 3.7vw;
    font-weight:900;
    position: absolute;
    top:22vh;
    left: 7vw;
`

export const BannerSubtitle = styled.h3`
    font-size:2.3vw;
    font-weight:500;
    text-transform:uppercase;
    position: absolute;
    top:35vh;
    left: 7vw;
`