import React from "react";
import { BoxContactStyled, GranBox, AHome, LogoImg, Spin, TopTitle } from "./Styles";
import Logo from "../../assets/pretoebranco.png"
import data from "../../database/dataContact.json"



export default function BoxContact(props) {

  


    return (
        <>
            

            <GranBox>
                
                <TopTitle>Links para contato</TopTitle>

                {
                    data.map((element, index) =>
                    (
                        <BoxContactStyled style={{backgroundColor:element.color}} key={index}>

                            <h2>{element.title}</h2>
                            <Spin>
                                <LogoImg src={Logo} alt="" />
                            </Spin>
                            <p>{element.description}</p>
                            <p>
                                <AHome href={element.link} target="_blank">
                                    ↠ Para saber +
                                </AHome>
                            </p>

                        </BoxContactStyled>
                    ))
                }

            </GranBox>

        </>
    )

}