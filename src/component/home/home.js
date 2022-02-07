import React from "react";
import Top from "../top"
import Product from "./product"
import DAO from "./DAO"
import Footer from "../footer";
import Header from "../header";

class Home extends React.Component {
  componentDidMount() {
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
