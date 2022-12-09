import React from "react";
import { BoxMusicStyled, GranBox, AHome, LogoImg, Spin, BtnStyled, PersonalMusic } from "./Styles";
import Logo from "../../assets/pretoebranco.png"
import data from "./dataBoxMusic.json";
import ReactAudioPlayer from 'react-audio-player';





export default function BoxMusic(props) {

    return (
        <>
            <GranBox>
                {
                    data.map((element, index) =>
                    (
                        <BoxMusicStyled key={index}>

                            <Spin>
                                <LogoImg src={Logo} alt="" />
                            </Spin>
                            <p><h2>{element.description}</h2></p>
                            <p>
                                <div>
                                    <ReactAudioPlayer
                                        src={element.audioUrl}
                                        controls
                                    />
                                </div>
                          </p>

                        </BoxMusicStyled>
                    ))
                }

            </GranBox>

        </>
    )

}