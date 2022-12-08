import React from "react"
import { FooterStyled, DivFooterStyled, Spin, LogoImg } from "./Styles"
import Logo from "../../assets/pretoebranco.png"
import ButtonInfo from "../ButtonInfo"


export default function Footer(props) {

  return (
    <>
      <FooterStyled>
        <DivFooterStyled>

          <Spin>
            <LogoImg src={Logo} alt="" />
          </Spin>

          <div>
            <h5>Sobre mim</h5>
            <p>Oi, Sou Adrian Zapico manager da Volúpia Music ®.
              Sou produtor musical e programador. Quero compartilhar meus conhecimentos com vocês
            </p>
          </div>

          <ButtonInfo />

        </DivFooterStyled>
      </FooterStyled>
    </>
  )

}