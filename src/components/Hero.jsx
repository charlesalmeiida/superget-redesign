import React from "react"
import logoAppSuperGet from "../assets/svg/logo-app-superget.svg"
import imgHero from "../assets/img/img-hero.png"
import { BtnSecondary } from "./BtnSecondary"

export class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="left">
            <h1>SuperGet Mobile</h1>
            <span className="price">de R$ 118,90 por</span>
            <h2>12x R$ 4,90</h2>
            <p>
              ou <strong>R$ 58,80 à vista</strong> no boleto
            </p>
            <span className="emoji">👉</span>
            <ul>
              <li>
                <BtnSecondary nameBtnSecondary="COMPRAR" />
              </li>
              <li className="icon-app">
                <img src={logoAppSuperGet} alt="" className="icon" />
                <span>
                  Baixe nosso <strong>app exclusivo</strong>
                </span>
              </li>
            </ul>
            <span className="frete">* Frete grátis para todo Brasil</span>
          </div>
          <div className="right">
            <div className="img-hero">
              <img src={imgHero} alt="" />
              <span>
                <strong>50%</strong> OFF
              </span>
            </div>
            <div className="bullets">
              <h3>2% </h3>
              <p>no crédito à vista e no débito</p>
              <ul>
                <li>Conexão bluetooth</li>
                <li>Realize transações <br /> pelo celular</li>
                <li>Venda pelo app <br /> SuperGet Mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
