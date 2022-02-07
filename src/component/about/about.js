import React from "react";
import './about.css';
import '../../App.css'
import Header from "../header";
import Footer from "../footer";
import {bottomNavigationActionClasses} from "@mui/material";

class About extends React.Component {
  render() {
    return (
      <div className="product_content_frame">
        {/*<Header/>*/}
        <div className="product_content">
          <div className="product_content_words">
            <div className="product_content_words_title">About Us</div>
            <div className="subtitle">
              How did DigiFun start？
            </div>
            <div className="words">
              DigiFun was founded in October 2021 by four partners who were passionate about blockchain technology and NFTs.
            </div>
            <div className="words">
              DigiFun is a communication, production, and investment platform for digital entertainment in the Metaverse, managed in the form of a Decentralized Autonomous Organization (DAO). It’s a mechanism based on UGC to design more user autonomous products to promote its development.
            </div>
            <div className="words">
              At first, DigiFun noticed that there was a large group of people who couldn't draw, didn't know how to model or other techniques, but they had a lot of interesting and creative ideas. DigiFunDAO was then established, aiming to produce best NFTs through joint collaborations. The outputs of DigiFun's NFTs are produced through the proposals and votes by community members, and they are the creations and results of community join efforts. DigiFun's products and community members will cover Decentraland, Sandbox and many other mainstreaming Metaverse platforms.
            </div>
            <div className="words">
              DigiFun will expand different platform markets, serve more people with creative ideas, and establish a platform to display and sell NFTs. DigiFun is committed to exploring the possibilities of more cutting-edge technologies and digital articrafts in future, and working with all of you to build the digital future.
            </div>
            <div className="subtitle" style={{marginBottom: "30px"}}>
              For business or press enquiries：
            </div>
            <div><span className="words">Contact us：</span><span className="words_email">official@digifundao.com</span></div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;