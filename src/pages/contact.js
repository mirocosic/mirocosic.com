import React, { Component } from 'react'
import face from "../assets/face.png"
import linked from "../assets/linked.png"
import emailjs from "emailjs-com"

class Contact extends Component {

  state = {
    message: ""
  }

  sendMessage = () => {
    emailjs
    .send("mailgun", "template_pfPZdUe9", {message_html: this.state.message}, "user_WeZ2vU2G3qMjDStWpb1rL")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("SENT!!")
   }, function(error) {
      console.log('FAILED...', error);
   });
  }

  render() {
    console.log(process.env)
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

          <textarea onChange={e => this.setState({ message: e.target.value })}></textarea>

          <button onClick={() => this.sendMessage()}>
            Contact
          </button>

        </div>
    )
  }
}

export default Contact
