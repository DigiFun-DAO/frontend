import React from "react";
import Top from "../top"
import Product from "./product"
import DAO from "./DAO"
import Footer from "../footer";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-4MJ7F3CJWQ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class Home extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div>
        {/*<Header/>*/}
        <Top/>
        <Product/>
        <DAO/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
