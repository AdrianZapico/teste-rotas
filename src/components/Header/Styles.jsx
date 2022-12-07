import styled,{keyframes} from "styled-components";


const height = "25vmin"
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const HeaderStyled = styled.header`

background-color: rgba(19, 0, 0 );
padding: 20px 0;

`
export const ContainerStyledHeader = styled.div`
    background-color:rgba(19, 0, 0 );
    padding: 20px 0;
    width: 100%;
    height: 60%;
`
export const Li = styled.li`
    display: inline;
    margin: 0 0 0 15px;
    background-color: transparent;
    text-decoration: none;
    color: whitesmoke;

`
export const Spin =  styled.div`

    animation: ${rotate} 3s linear infinite;
    display: inline-block;
    margin: 30px 50px;
 
`
export const LogoImg = styled.img`


    height: ${height};
    pointer-events: none;


`

