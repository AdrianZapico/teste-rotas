import React from "react";
import { ContainerStyledHeader, Li, Spin ,LogoImg } from "./Styles"
import { Link, Outlet } from "react-router-dom"
import Logo from "../../assets/pretoebranco.png"



export default function Header(props) {

    return (
        <>
            <ContainerStyledHeader>

                <header>

                    <div class="box">
                        <Spin>
                            <LogoImg src={Logo} alt=""/>
                        </Spin>


                       
                    </div>



                </header>

            </ContainerStyledHeader>

        </>
    )
}
