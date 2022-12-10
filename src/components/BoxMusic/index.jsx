import React from "react";
import {  GranBox,  } from "./Styles";
import data from "../../database/dataBoxMusic.json";
import TagAudio from "../TagAudio/TagAudio";







export default function BoxMusic(props) {
    
    return (
        <>
            <GranBox>
                {
                    data.map((element, index) =>
                    (
                        <TagAudio key={index} description={element.description} src={element.link}>
                        </TagAudio>
                    ))
                }

            </GranBox>

        </>
    )

}