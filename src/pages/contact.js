import React, { Component } from 'react'
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Page } from "../components"
import face from "../assets/face.png"
import linked from "../assets/linked.png"

class Contact extends Component {

  state = {
    mail: "",
    message: "",
    inProgress: false
  }

  sendMessage = () => {
    const { mail, message } = this.state

    if ( mail === "" || message === "") { return; }

    this.setState({inProgress: true})

    emailjs
    .send("mailgun", "template_pfPZdUe9", {message_html: this.state.message}, "user_WeZ2vU2G3qMjDStWpb1rL")
    .then(response => {
      this.setState({inProgress: false})
      toast.success('Hey!! \n Your message has been sent on an epic journey through wonderful and magical lands of the Internet! \n Hooray! 😸', {hideProgressBar: false});
   }, error => {
     toast.error("Awwww... Something broke... :(")
      console.log('FAILED...', error)
   })
  }

  render() {
    return (
      <Page>
        <h1 className="display-4 text-center">Contact</h1>

        <div style={{ flex: 1, flexDirection: "row" }}>
          <a href="https://www.facebook.com/miro.cosic.vuk" target="_blank" rel="noopener noreferrer">
            <img src={face} className="social" alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/mirocosic" target="_blank" rel="noopener noreferrer">
            <img src={linked} className="social" alt=""/>
          </a>
        </div>

        <fieldset className="form-group col-6 mt-4">
          <label for="contactMessage">Your email:</label>
          <input className="form-control mb-2" type="text" id="contactMail" onChange={e => this.setState({ mail: e.target.value })} />

          <label for="contactMessage">Your message:</label>
          <textarea style={{height: "100px"}} className="form-control" id="contactMessage" onChange={e => this.setState({ message: e.target.value })}></textarea>

          <button className="btn btn-primary mt-4" onClick={() => this.sendMessage()} disabled={this.state.inProgress}>
            { this.state.inProgress
              ? <div class="spinner-border text-light" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              : "Contact"
              }
          </button>
        </fieldset>

      </Page>
    )
  }
}

export default Contact
