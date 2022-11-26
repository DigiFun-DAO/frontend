import React from "react";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

class Product extends React.Component {
  state = {
    button_selected: false
  }

  render() {
    return (
      <div className="product" id="product">
        <div className="product_frame">
          <div className="product_intro">
            <div className="product_intro_title">Products</div>
            <span className="product_intro_comments">The products from DigiFun are the results of the  wisdom of the community.</span>
            <span className="product_intro_comments">Purchasing our products and you could become one part of us for the DAO governance of DigiFun.</span>
          </div>
          <div className="product_icon_frame">
            <img className="product_wearables" src={require("../../assets/wearables.svg").default}/>
            <img className="product_scenes" src={require("../../assets/scenes.svg").default}/>
            <img className="product_others" src={require("../../assets/others.svg").default}/>
            <img className="product_avatars" src={require("../../assets/avatars.svg").default}/>
          </div>
          <img className={this.state.button_selected ? "button_explore_selected" : "button_explore"}
               src={require("../../assets/Button-Explore.svg").default}
               style={{cursor: 'pointer'}}
               onMouseEnter={() => {
                 this.setState({button_selected: true})
               }}
               onMouseLeave={() => {
                 this.setState({button_selected: false})
               }}
               onClick={() => {
                 history.push('/#/product')
                 window.location.reload()
               }}
          />
        </div>
      </div>
    );
  }
}

export default Product;