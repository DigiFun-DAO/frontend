import './App.css';
import Home from './component/home/home'
import React, {useEffect } from 'react';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-4MJ7F3CJWQ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  };

}

export default App;
