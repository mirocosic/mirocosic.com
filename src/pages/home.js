import React from "react"
import logo from '../logo.svg'
import face from "../assets/face.png"
import linked from "../assets/linked.png"
import { Page } from "../components"

export default () => (
  <Page>
    <h1 className="display-1 text-center">Hi!</h1>
    <div className="d-flex flex-column justify-content-center ">
      <h5 className="text-center">I'm currently building my new awesome page with: </h5>
      <img src={logo} className="App-logo" alt="logo" />

      <p className="text-center">In the meantime, you can find me on these locations:</p>

      <div className="d-flex justify-content-center">
        <a href="https://www.facebook.com/miro.cosic.vuk" target="_blank" rel="noopener noreferrer">
          <img src={face} className="social" alt=""/>
        </a>
        <a href="https://www.linkedin.com/in/mirocosic" target="_blank" rel="noopener noreferrer">
          <img src={linked} className="social" alt=""/>
        </a>
      </div>
    </div>

  </Page>
)
