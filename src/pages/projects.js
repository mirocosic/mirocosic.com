import React, { Component } from 'react'
import { Page } from "../components"
import pdeboer from "../assets/pdeboer.png"

class Home extends Component {
  render() {
    return (
      <Page>
        <h1 className="display-4 text-center">Projects</h1>

        <div className="row mt-4">

          <div className="col-6">

            <h3>Wordpress</h3>
              <ul>
                <li>
                  <a href="https://www.ronitisemora.hr" target="_blank" rel="noopener noreferrer">
                    ronitisemora.hr
                  </a>
                </li>
                <li>
                  <a href="https://www.uwphotomarathon.com" target="_blank" rel="noopener noreferrer">
                    uwphotomarathon.com
                  </a>
                </li>
                <li>
                  <a href="https://damirzurub.com" target="_blank" rel="noopener noreferrer">
                    damirzurub.com
                  </a>
                </li>

                <li>
                  <a href="https://pdeboer.photos" target="_blank" rel="noopener noreferrer">
                    pdeboer.photos
                  </a>
                </li>

                <li>
                  <a href="https://www.paintball-sljeme.com" target="_blank" rel="noopener noreferrer">
                    paintball-sljeme.com
                  </a>
                </li>

                <li>
                  <a href="https://www.dentalgmaz.com" target="_blank" rel="noopener noreferrer">
                    dentalgmaz.com
                  </a>
                </li>

                <li>
                  <a href="https://www.cojonesband.com" target="_blank" rel="noopener noreferrer">
                    cojonesband.com
                  </a>
                </li>

              </ul>

            <h3>React</h3>
              <ul>

                <li>
                  <a href="">
                    This page :D
                  </a>
                </li>
              </ul>

            <h3>React Native</h3>
              <ul>

                <li>
                  <a href="">
                    xTrack - expense tracker
                  </a>
                </li>
              </ul>
          </div>

          <div className="col-6">
            <h2>Pieter de Boer Photos</h2>
            <img src={pdeboer} alt="" width="50%"/>
          </div>
        </div>

      </Page>
    )
  }
}

export default Home
