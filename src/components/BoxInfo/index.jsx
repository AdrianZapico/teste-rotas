import React from "react";
import { BoxInfoStyled, GranBox, AHome, LogoImg, Spin, BtnStyled, PersonalInfo } from "./Styles";
import { useState } from "react"
import Logo from "../../assets/pretoebranco.png"
import data from "../../database/data.json"



export default function BoxInfo(props) {

    const [mostrar, showInfo] = useState(false)
    function handleShow() {


        if (mostrar) {


            showInfo(false)
        }
        else {

            showInfo(true)
        }
    }


    return (
        <>
            

            <GranBox>
                <BtnStyled onClick={handleShow}></BtnStyled>
                
                {mostrar &&

                    <PersonalInfo>Olá meu nome é Adrian,como vai?Essa é minha pagina pessoal sobre desenvolvimento e produção musical.Espero que gostem😁</PersonalInfo>

                }
                
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