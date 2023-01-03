import React from "react";
import { useEffect, useState } from "react";
import { BoxCodeStyled, GranBox, AHome, LogoImg, Spin, TopTitle } from "./Styles";
import Logo from "../../assets/pretoebranco.png"


export default function BoxCode() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/AdrianZapico/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])

    return (
        <>
        
            <GranBox>
            <TopTitle>Code</TopTitle>

                <div>
                    {repositories.map(repository => {
                        return (
                            <BoxCodeStyled>
                                <div>
                                    <h3>{repository.name}</h3>
                                    <Spin>
                                        <LogoImg src={Logo} alt="" />
                                    </Spin>
                                    <p>{repository.description}</p>
                                    <AHome href={repository.html_url} target="_blank" >Saiba mais</AHome>
                                </div>
                            </BoxCodeStyled>
                        )
                    })}
                </div>

            </GranBox>
        </>
    )
}