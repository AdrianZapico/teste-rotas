import React from "react"
import { FooterStyled, DivFooterStyled, Spin, LogoImg, AHome, } from "./Styles"
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


          <div>
            <AHome href="mailto:joeytafolla123@gmail.com">Send me a E-mail📧</AHome>
          </div>


        </DivFooterStyled>
      </FooterStyled>
    </>
  )

}