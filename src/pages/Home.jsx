import React from "react";
import BoxInfo from "../components/BoxInfo";
import data from "../database/data.json"



export default function Home() {
    return (
        <>
            {
                data.map((element,index)=>(
      
                    <BoxInfo 
                    key={index} 
                    title={element.title}
                    description={element.description}
                    link={element.link}
                    />
                    
                ))
              

            }

        </>
    )
}

