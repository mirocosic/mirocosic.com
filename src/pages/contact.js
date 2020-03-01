import React, { Component } from 'react'
import face from "../assets/face.png"
import linked from "../assets/linked.png"
import mailgun from "mailgun.js"

class Contact extends Component {

  componentDidMount(){
      this.mailgun = mailgun.client({ username: "mirocosic@gmail.com", key: process.env.MAILGUN_KEY})
  }

  sendMessage = () => {
    this.mailgun.messages.create('mirocosic.com', {
    from: "Excited User <mailgun@mirocosic.com>",
    to: ["mirocosic@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: "<h1>Testing some Mailgun awesomness!</h1>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
  }

  render() {
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

          <button onClick={() => this.sendMessage()}>
            Contact
          </button>

        </div>
    )
  }
}

export default Contact
