import React from "react";
import { BoxInfoStyled, GranBox, AHome, LogoImg, Spin } from "./Styles";
import Logo from "../../assets/pretoebranco.png"
import { Link, Outlet, redirect } from "react-router-dom"




export default function BoxInfo(props) {

    return (

        <>
            <GranBox>
                
                <BoxInfoStyled>
                    <div>
                        <h2>{props.title}</h2>
                        <Spin>
                            <LogoImg src={Logo} alt="" />
                        </Spin>
                        <p>{props.description}</p>
                        <p>
                            <AHome>
                                <Link className="linkRouter" to={redirect(`${props.link}`)} >
                                    ↠ Para saber + 
                                </Link>
                            </AHome>
                            <Outlet/>
                        </p>
                    </div>
                </BoxInfoStyled>
                

            </GranBox>
        </>
    )

}