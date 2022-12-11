import styled from "styled-components";

export const TopTitle = styled.div`

  text-align: center;
  font-family: Impact;
  font-style: normal;
  font-size: 40px;
  color: whitesmoke;
  
  

`

export const GranBox = styled.div`

    text-align: center;
    display: block;
    background-color: rgba(19,0,0);
`

export const LaunchPadStyled = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    padding-left: 35%;
    padding-top: 90px;
    padding-bottom: 5%;
    text-align: center;

    @media screen and (max-width:480px)
    {
    
    display: grid;
    grid-template-columns: 50px 50px 50px 50px;
    padding-left: 25%;
    padding-top: 20px;
    padding-bottom: auto;
    text-align: center;

    }
    
`