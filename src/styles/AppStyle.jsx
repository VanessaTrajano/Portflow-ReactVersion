import styled from "styled-components";

// header

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 15px 50px;
    background-color: #fff0ff;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 10%;

    @media(max-width: 426px){
        padding:0;
        height: 8%;
        padding-left: 10px;
    }
`

// main

export const Main = styled.main`
    padding-top: 4.8%;
    background-color: #fff0ff;

    @media(max-width: 426px){
        padding-top: 8%;
    }
`

// footer

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    background-color: #fff0ff;
`