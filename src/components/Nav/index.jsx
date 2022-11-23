import { NavStyled, UlStyled, LiStyled } from "./Styles"
import { Link, Outlet } from "react-router-dom"

export default function Header() {

    return (
        <>
            <NavStyled>
                <UlStyled>
                    <Link  className="linkRouter" to="home">
                        <LiStyled> Home </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="about">
                        <LiStyled> About </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="contact">
                        <LiStyled> Contact </LiStyled>
                    </Link>
                </UlStyled>
            </NavStyled>
            <Outlet/>
        </>
    )
}

