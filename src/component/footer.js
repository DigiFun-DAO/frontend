import * as React from 'react';
import Alert from '@mui/material/Alert';
import axios from "axios";
import {API_BASE_URL} from '../constants';

const target = "/addr"

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: ""
    }
  }

  handleSendEmailAddress = () => {
    if(this.state.emailAddress.length === 0) {
      return
    }

    const apiBase = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    });

    let data = new FormData();
    data.append('email',this.state.emailAddress);
    apiBase.post(target, data)
    alert("Subscribed!")
  }

  render() {
    return (
      <div className="footer" id="about">
        <div className="connect_frame">
          {/*<div className="connect">Connect</div>*/}
          <input className="connect_input"
                 placeholder="Enter email address"
                 onChange={(event) => {
                   this.setState({
                     emailAddress: event.target.value,
                   })
                 }}/>
          <button className="connect_send_button" onClick={this.handleSendEmailAddress}>
            <div className="connect_send_button_words">
              Subscribe
            </div>
          </button>
          {/*<img  src={require("../assets/Button-Send.svg").default}/>*/}
        </div>
        <div className="footer_icon_frame">
          <a href="mailto:official@digifundao.com">
            <img className="email_icon" src={require("../assets/email.svg").default}/>
          </a>
          <a href="https://twitter.com/DigiFun_">
            <img className="twitter_icon" src={require("../assets/logo-twitter.svg").default}/>
          </a>
          <a href="https://discord.gg/6tArQY6WGu">
            <img className="discord_icon" src={require("../assets/logo-discord.svg").default}/>
          </a>
        </div>
        <div className="footer_words">© 2020 DigiFun, Inc. All rights reserved</div>
      </div>
    );
  }
}

export default Footer;