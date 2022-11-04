import './App.css';
import Home from './component/home/home'
import React, {useEffect } from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-226359084-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends React.Component {
  componentDidMount() {
    console.log(window.location.pathname + window.location.search)
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  };

}

export default App;
