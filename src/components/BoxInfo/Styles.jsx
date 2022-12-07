import styled,{keyframes} from "styled-components";

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
    &:hover
    {
    background-color: whitesmoke;
    border-color: rgba(19, 0, 0 );
    transform: rotate(725deg) scale(1.2);
    transition: all ease 0.8s;  
    }
    
`