import styled from "styled-components";

export const PageTitle = styled.h1`
    font-weight: 900;
    font-size: 2.5vw;

    @media(max-width: 426px){
        font-size: 4vh;
    }
`

export const HamburguerMenu = styled.div`
    display:none;

    @media(max-width: 426px){
        display:flex;
        justify-content:center;
        align-items:center;
        width: 25%;
        height:100%;
        background-color: #000;

        img{
            backgorund-color: black;
            width: 40%;
        }
    }
`

export const NavigationBar = styled.nav`
    width: 50%;

    ul{
        display: flex;
        list-style: none;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        font-size:1.3vw;
    }

    ul li{
        width:14%;
        height:55%;
        text-align: center;
    }

    ul li:hover{
        font-weight:800;
        cursor: pointer;
        border-bottom: 1.5px solid black;
    }

    @media(max-width: 426px){
        display:none;
    }
`