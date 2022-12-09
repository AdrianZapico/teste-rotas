import styled, { keyframes } from "styled-components";

const redPersonal = "#c53e1c"
const height = "4vmin"
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ButtonInfoStyled = styled.div`
 
    border: 1px solid #333;
    border-radius: 6px;
    color: #f2e9e9;
    display: inline-block;
    font-size: 8px;
    margin-bottom: 3px;
    margin-left: 4px;
    padding: 1px 7px;
    text-decoration: none;
    transition: ease-in-out 0.8s;
    
    &:hover
    {
    border: none;
    border-radius: 3px;
    color: rgb(248, 236, 236);
    display: inline-block;
    font-size: 15px;
    margin-bottom: 1px;
    padding: 7px 10px;
    background-color: rgb(66 103 178);  
    }
    
    @media screen and (max-width:480px)
    {
      width: auto;
      height: auto;
      padding: auto;
      margin: 10 10px;
     padding: 2px 5px;
     box-sizing: border-box;
     border: 2px solid rgba(19, 0, 0 );
     border-radius: 10px;
     color: transparent;
     margin-top: 15px;
      
    }
    
`
export const AHome = styled.a`

  text-decoration: none;
 	color: whitesmoke;
 
   
`
export const LogoImg = styled.img`

    
    height: ${height};
    pointer-events: none;



`
export const Spin = styled.div`

    animation: ${rotate} 3s linear infinite;
    display: inline-block;
    margin: 10px 10px;
`
