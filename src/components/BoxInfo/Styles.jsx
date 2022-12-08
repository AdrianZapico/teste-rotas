import styled,{keyframes} from "styled-components";

const height = "4vmin"
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const GranBox = styled.div`

    width: 940px;
    margin: 10px auto;
    padding: 50px 130px;
    border: 2px solid rgba(19, 0, 0 ) ;
    background-color: rgba(19, 0, 0 ) ;

`
export const BoxInfoStyled = styled.div`
 
    display: inline-block;
    text-align: center;
    width: 30%;
    vertical-align: top;
    margin: 0 1.5%;
    padding: 50px 20px;
    box-sizing: border-box;
    border: 2px solid rgba(19, 0, 0 );
    border-radius: 10px;
    color: transparent;
    &:hover
    {
    background-color: whitesmoke;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    transform: rotate(725deg) scale(1.2);
    transition: all ease 0.8s;  
    }
    
`
export const AHome = styled.a`

  text-decoration: none;
 	color: rgba(19, 0, 0 );
    &:hover{
    color: #c53e1c;
		transition: all ease 0.7s;
		font-size: 25px;
	}
   
`
export const LogoImg = styled.img`


    height: ${height};
    pointer-events: none;


`
export const Spin =  styled.div`

    animation: ${rotate} 3s linear infinite;
    display: inline-block;
    margin: 30px 50px;
`