import { BoxStyled,HeaderStyled } from "./Styles";
import Nav from "../Nav"

export default function Header() {

    return (
        <>
            <HeaderStyled>
                <BoxStyled>
                    <a href="index.html"><img src="https://adrianzapico-front-end-port.netlify.app/pretoebranco.png" alt="" /></a>
                   <Nav/>
                    </BoxStyled>
                </HeaderStyled>
        </>
    )
}