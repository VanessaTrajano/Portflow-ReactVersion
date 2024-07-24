import styled from "styled-components";
import ImagemLaranja from "../images/laranja-azul.png"

// estilo pertencente ao componente Banner

export const BannerContainer = styled.section`
    height: 85vh;
    width: 100%;
    background-size:100% 100%;
    background-image: url(${ImagemLaranja});
    position:relative;
    color: #fff0ff;
`

export const BannerTitle = styled.h2`
    font-size: 4vw;
    font-weight:900;
    position: absolute;
    top:29vh;
    left: 7vw;
`

export const BannerSubtitle = styled.h3`
    font-size:2vw;
    font-weight:400;
    text-transform:uppercase;
    position: absolute;
    top:45vh;
    left: 7vw;
`

// estilo pertencente ao componente Images

export const ImagesContainer = styled.section`
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px 0;

    img{
        height: 45vh;
        margin: 20px 0;
    }
`