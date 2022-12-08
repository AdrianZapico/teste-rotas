import React from "react";
import { BoxInfoStyled, GranBox, AHome, LogoImg, Spin } from "./Styles";
import Logo from "../../assets/pretoebranco.png"
import data from "../../database/data.json"



export default function BoxInfo(props) {

    return (
        <>
        
            <GranBox>
                {
                    data.map((element, index) => 
                    (
                        <BoxInfoStyled key={index}>

                            <h2>{element.title}</h2>
                            <Spin>
                                <LogoImg src={Logo} alt="" />
                            </Spin>
                            <p>{element.description}</p>
                            <p>
                                <AHome href={element.link}>
                                    ↠ Para saber +
                                </AHome>                  
                            </p>
                        
                        </BoxInfoStyled>
                    ))
                }
               
            </GranBox>
            
        </>
    )

}