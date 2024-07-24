import styled from "styled-components";

export const PageTitle = styled.h1`
    font-weight: 900;
    font-size: 2.5vw;
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
`