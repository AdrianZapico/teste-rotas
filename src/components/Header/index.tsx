import React from "react";
import { ContainerStyledHeader,  Spin , LogoImg } from "./Styles"


export default function Header(props:any) {

    return (
        <>
            <ContainerStyledHeader>

                <header>

                    <div className="box">
                        <Spin>
                            <LogoImg src={require('../../assets/pretoebranco.png')} alt=""/>
                        </Spin>

                    </div>



                </header>

            </ContainerStyledHeader>

        </>
    )
}
