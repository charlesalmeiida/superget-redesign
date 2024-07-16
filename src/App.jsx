import React from "react"
import "./css/main.min.css"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Benefits } from "./components/Benefitx"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Benefits />
      </div>
    )
  }
}

export default App
