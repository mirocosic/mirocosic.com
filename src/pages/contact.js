import React from 'react'
import face from "../assets/face.png"
import linked from "../assets/linked.png"

const Contact = function() {
    return (
        <div className="bg-gray full-height">
          <h2>Contact</h2>

          <div style={{ flex: 1, flexDirection: "row" }}>
            <a href="https://www.facebook.com/miro.cosic.vuk" target="_blank" rel="noopener noreferrer">
              <img src={face} className="social" alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/mirocosic" target="_blank" rel="noopener noreferrer">
              <img src={linked} className="social" alt=""/>
            </a>
          </div>

        </div>
    )
  }

export default Contact
