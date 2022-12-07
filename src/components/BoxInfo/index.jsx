import React from "react";
import { BoxInfoStyled } from "./Styles";




export default function BoxInfo(props) {

    return (

        <>
            <BoxInfoStyled>
                {props.children}
            </BoxInfoStyled>
           
        </>
    )

}