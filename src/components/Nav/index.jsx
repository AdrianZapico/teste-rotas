import { NavStyled, UlStyled, LiStyled } from "./Styles"
import { Link, Outlet } from "react-router-dom"

export default function Nav() {

    return (
        <>
            <NavStyled>
                <UlStyled>
                    <Link  className="linkRouter" to="/">
                        <LiStyled> Home </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="code">
                        <LiStyled> Code </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="musicas">
                        <LiStyled> Musicas </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="contato">
                        <LiStyled> Contato </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="bonus">
                        <LiStyled> Bonus</LiStyled>
                    </Link>
                </UlStyled>
            </NavStyled>
            <Outlet/>
        </>
    )
}

