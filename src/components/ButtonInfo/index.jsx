import React from "react";
import { ButtonInfoStyled, AHome} from "./Styles";
import data from "../../database/dataBtn.json"



export default function ButtonInfo(props) {

  
    return (
        <>
 
                {
                    data.map((element, index) =>
                    (
                        <ButtonInfoStyled style={{backgroundColor:element.color}} key={index}>

                            <h2>{element.title}</h2>
            
                            <p>
                                <AHome href={element.link}>
                                <p>{element.description}</p>
                                </AHome>
                            </p>

                        </ButtonInfoStyled>
                    ))
                }

            

        </>
    )

}