import styled, { keyframes }  from "styled-components";

const height = "4vmin"
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const TagAudioStyled = styled.div`
 
    display: inline-block;
    text-align: center;
    width: 40%;
    vertical-align: top;
    margin: 0 1.5%;
    padding: 30px 20px;
    box-sizing: border-box;
    border: 2px solid  rgba(19, 0, 0 );
    border-radius: 10px;
    font-family: serif;
    color: rgba(19, 0, 0 );
    &:hover
    {
    background-color: whitesmoke;
    border-color:  rgba(19, 0, 0 );
    transform: scale(1);
    transition: all ease 0.8s;  
    }
    @media screen and (max-width:480px)
    {
      width: auto;
      height: auto;
      padding: auto;
      margin: 0 1.5%;
     padding: 2px 40px;
     box-sizing: border-box;
     border: 2px solid rgba(19, 0, 0 );
     border-radius: 10px;
     color: transparent;
     margin-top: 15px;
      
    }
    
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