// 页面顶部栏
import React from "react";
import '../App.css';
import history from '../history'
import Metamask from "./wallet/metamask";

class Header extends React.Component {
  constructor(props) {
    super(props);
    const strs = window.location.href.split('/')
    this.state = {button_selected: [false, false, false]};
    if (strs[strs.length - 1] === "about") {
      this.state = {button_selected: [false, false, true]};
    } else if (strs[strs.length - 1] === "DAO") {
      this.state = {button_selected: [false, true, false]};
    }
  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src={require("../assets/logo.svg").default}
             style={{cursor: 'pointer'}}
             onClick={() => {
               history.push('/')
               window.location.reload()
             }}
             alt=""/>
        <div className="header_frame">
          <button className={this.state.button_selected[0] === true ? "button_selected" : "button_empty"}
                  style={{cursor: 'pointer'}}
                  onMouseEnter={() => {
                    this.setState({button_selected: [true, false, false]})
                  }}
                  onMouseLeave={() => {
                    this.setState({button_selected: [false, false, false]})
                  }}
                  onClick={() => {
                    history.push('/#/product')
                    window.location.reload()
                  }}>
            <div className={this.state.button_selected[0] === true ? "word_selected" : "word_empty"}>Product</div>
          </button>
          <a style={{textDecoration: "none"}}
             href="https://snapshot.org/#/digifun.eth">
            <button className={this.state.button_selected[1] === true ? "button_selected" : "button_empty"}
                    style={{cursor: 'pointer'}}
                    onMouseEnter={() => {
                      this.setState({button_selected: [false, true, false]})
                    }}
                    onMouseLeave={() => {
                      this.setState({button_selected: [false, false, false]})
                    }}>
              <div className={this.state.button_selected[1] === true ? "word_selected" : "word_empty"}>DAO</div>
            </button>
          </a>
          <button className={this.state.button_selected[2] === true ? "button_selected" : "button_empty"}
                  style={{cursor: 'pointer'}}
                  onMouseEnter={() => {
                    this.setState({button_selected: [false, false, true]})
                  }}
                  onMouseLeave={() => {
                    this.setState({button_selected: [false, false, false]})
                  }}
                  onClick={() => {
                    history.push('/#/about')
                    window.location.reload()
                  }}>
            <div className={this.state.button_selected[2] === true ? "word_selected" : "word_empty"}>About</div>
          </button>
        </div>
        <Metamask/>
        {/*<div className="header_wallet">*/}
        {/*  <button className="button_wallet"*/}
        {/*          style={{cursor: 'pointer'}}*/}
        {/*          onClick={() => {*/}
        {/*          }}>*/}
        {/*    <div className="word_selected">Connect Wallet</div>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Header;
