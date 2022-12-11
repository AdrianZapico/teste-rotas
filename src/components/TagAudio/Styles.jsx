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
 
    text-align: center;
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
export const TextH2 = styled.h2`

font-family: serif;
color: rgba(19, 0, 0 ) ;

@media screen and (max-width:480px)
    {
      font-size:10px;
      
    }

`
export const BtnPlay = styled.button`

  text-align: center;
  margin: 10px;
  width: 60px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 10px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  &:hover{
    background-color: #26af3d;
    border: none;
  }
  &:active{
    background-color: #92ce9c;
  }


`
export const BtnPause = styled.button`

  text-align: center;
  margin: 10px;
  width: 60px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 10px;
  font-family:  sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  &:hover{
    background-color: #eb4f28;
    border: none;
  }
  &:active{
    background-color: #e18169;
  }



`
