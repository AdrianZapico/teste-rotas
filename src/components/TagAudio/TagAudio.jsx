import React from "react";
import { TagAudioStyled, LogoImg, Spin } from "./Styles";
import Logo from "../../assets/pretoebranco.png";


export default function TagAudio(props) {
    const audio = new Audio(require(`../../assets/audios/${props.src}`))
    return (
        <>



            <TagAudioStyled onClick={() => { audio.play() }}>
                <div>
                <Spin>
                    <LogoImg src={Logo}>
                    </LogoImg>
                </Spin>
                </div>
               
                {props.description}
            </TagAudioStyled>
        </>
    )
}

