import styled from "styled-components";

export const PadStyled = styled.div`
    background-color: black;
    border: 1px solid blue;
    font-size: 30px;
    text-align: center;
    color: grey;
    height: 100px;
    font-size: 25px;

    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 3px;
    border: none;
    color: white;
    &:hover {
        background-color: lightblue;
        color: black;
    }
    &:active{

        background-color: #a96d6d;

    }
    @media screen and (max-width:480px)
    {

        width: 50px;
        height: 60px;
        font-size: 15px;
        

    }
`



