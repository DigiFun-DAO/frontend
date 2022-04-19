import './App.css';
import Home from './component/home/home'
import React from "react";
import ReactGA from 'react-ga'

class App extends React.Component {
  componentDidMount() {
    ReactGA.initialize('G-4MJ7F3CJWQ');
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
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
