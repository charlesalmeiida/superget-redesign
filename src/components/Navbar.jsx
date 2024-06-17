import React from "react"
import logo from "../assets/img/logo.png"
import { ItemNav } from "./ItemNav"
import { BtnPrimary } from "./BtnPrimary"

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <nav>
            <ul className="center-nav">
              <ItemNav menu="Maquininha" />
              <ItemNav menu="App Getnet" />
              <ItemNav menu="Cartão SuperGet" />
              <ItemNav menu="Ajuda" />
            </ul>
            <ul className="right-nav">
              <ItemNav menu="Quero Alugar" />
              <ItemNav menu="Cadastro" />
            </ul>
          </nav>
          <div className="btns">
            <BtnPrimary textBtn={"Pedir maquininha"} />
          </div>
        </div>
      </header>
    )
  }
}
