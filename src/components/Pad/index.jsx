import React from "react";
import { PadStyled } from "./Styles";


export default function Pad(props) {
    const audioPad = new Audio(require(`../../assets/audio/${props.src}`))
    return (
        <>
            <PadStyled onClick={() => { audioPad.play() }}>
                {props.message}
            </PadStyled>   
        </>
    )

}