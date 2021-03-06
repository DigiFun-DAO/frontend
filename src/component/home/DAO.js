import * as React from 'react';
import Product from "./product";

class DAO extends React.Component {
  state = {
    button_selected: false
  }
  render() {
    return (
      <div className="DAO_frame" id="DAO" name="DAO">
        <div className="DAO_words_frame">
          <div className="DAO_inner_words_frame">
            <div className="DAO_title">DAO</div>
            <div className="DAO_comments">Everyone can be a creator.</div>
            <div className="DAO_comments">Suggest your idea, vote for your favorite</div>
            <div className="DAO_comments">creative product and make them a reality.</div>
          </div>
          <a href="https://snapshot.org/#/digifun.eth">
            <img className={this.state.button_selected ? "DAO_button_selected" : "DAO_button"}
                 src={require("../../assets/Button-DAO-Voting.svg").default}
                 style={{cursor: 'pointer'}}
                 onMouseEnter={() => {
                   this.setState({button_selected: true})
                 }}
                 onMouseLeave={() => {
                   this.setState({button_selected: false})
                 }}
            />
          </a>
        </div>
        <img className="helix_4" src={require("../../assets/helix-4.png").default}/>
        <img className="doughnut_3" src={require("../../assets/doughnut-3.png").default}/>
        <img className="comment1" src={require("../../assets/comment1.png").default}/>
        <img className="comment2" src={require("../../assets/comment2.png").default}/>
        <img className="comment3" src={require("../../assets/comment3.png").default}/>
        <img className="comment4" src={require("../../assets/comment4.png").default}/>
        <img className="comment5" src={require("../../assets/comment5.png").default}/>
        <img className="saly" src={require("../../assets/saly1.png").default}/>
        <img className="hazelnut2" src={require("../../assets/hazelunt2.png").default}/>
      </div>
    );
  }
}
export default DAO;