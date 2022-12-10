import React from "react";
import { ContainerStyledHeader,  Spin , LogoImg } from "./Styles"
import Logo from "../../assets/pretoebranco.png"



export default function Header(props) {

    return (
        <>
            <ContainerStyledHeader>

                <header>

                    <div className="box">
                        <Spin>
                            <LogoImg src={Logo} alt=""/>
                        </Spin>

                    </div>



                </header>

            </ContainerStyledHeader>

        </>
    )
}
