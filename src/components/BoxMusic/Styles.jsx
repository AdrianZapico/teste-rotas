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

export const TopTitle = styled.div`

  text-align: center;
  font-family: Impact;
  font-style: normal;
  font-size: 40px;
  color: whitesmoke;
  


`

export const GranBox = styled.div`

    text-align: center;
    width: 940px;
    margin: 10px auto;
    padding: 50px 130px;
    border: 2px solid rgba(19, 0, 0 ) ;
    background-color: rgba(19, 0, 0 ) ;
    @media screen {
      width: auto;
      height: auto;
      padding: auto;

    }

`
export const BoxMusicStyled = styled.div`
 
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
    transition: all ease 0.5s;  
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
export const AHome = styled.a`

  text-decoration: none;
 	color: rgba(19, 0, 0 );
    &:hover{
    color: ${redPersonal};
		transition: all ease 0.7s;
		font-size: 25px;
	}
   
`
export const BtnStyled = styled.button`

  margin:0px 1px 1px 0px;
  padding: 0px; 
  display: inline-block;
  
`
export const PersonalInfo = styled.div`
  
  background-color: white;
    color: rgba(19, 0, 0);
    display: inline-block;
    padding:  12px ;
    font-family: Impact;
    border-radius: 10px;
    position: relative;
    padding-left: 40px;
    

`