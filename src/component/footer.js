import * as React from 'react';

export default function Footer() {

  return (
    <div className="footer" id="about">
      <div className="connect_frame">
        <div className="connect">Connect</div>
        <input className="connect_input" placeholder="Enter email address"/>
        <img className="connect_send_button" src={require("../assets/Button-Send.svg").default}/>
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