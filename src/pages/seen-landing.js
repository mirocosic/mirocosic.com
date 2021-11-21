import React from 'react'
import { Page } from "../components"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import google from "../assets/google-play.png"
import apple from "../assets/app-store-badge.png"

export default function() {
  return (
    <Page>
      <h1 className="display-4 text-center">SEEN:app</h1>

      <p className="text-center p-5">Enter the void...</p>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      
        <a href="https://play.google.com/store/apps/details?id=com.mirocosic.xtrack">
          <img src={google} style={{width: "300px", display: "block"}}/>
        </a>

        <a href="https://apps.apple.com/us/app/miro-xtrack/id1458271423">
          <img src={apple}  style={{width: "300px", display: "block"}} />
        </a>

      </div>

    </Page>
  )
}
