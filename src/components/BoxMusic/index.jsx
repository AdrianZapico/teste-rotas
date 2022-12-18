import React from "react";
import {  GranBox,TopTitle  } from "./Styles";
import data from "../../database/dataBoxMusic.json";
import TagAudio from "../TagAudio/TagAudio";
import AudioVisualizer from "../AudioVisualizer";





export default function BoxMusic(props) {
    
    return (
        <>
       
            <GranBox>
                <TopTitle>Músicas</TopTitle>
                
                {
                    data.map((element, index) =>
                    (
                        <TagAudio key={index} id={element.id} description={element.description} src={element.link}>
                            
                        </TagAudio>
                        
                    ))
                }

            </GranBox>

        </>
    )

}