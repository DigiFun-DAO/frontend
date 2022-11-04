import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from "react-router-dom"
import ProductContent from "./component/product/productContent";
import ProductDetail from "./component/product/productDetail.jsx";
import About from "./component/about/about";
import Videos from "./component/videos/videos";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Header from "./component/header";
import { createBrowserHistory } from 'history';
import { ConfigProvider } from "antd"
import { MessageProvider } from "./component/Message"
import ReactGA from 'react-ga';

let history = createBrowserHistory()
ReactGA.initialize('UA-226359084-1');
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

function getLibrary(provider) {
  return new Web3(provider)
}

const rootElement = document.getElementById("root");

render(
  <ConfigProvider>
    <MessageProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path={"" + "/"} element={<App />} />
            <Route path={"" + "/product"} element={<ProductContent />} />
            <Route path={"" + "/product/detail/:id"} element={<ProductDetail />} />
            <Route path={"" + "/about"} element={<About />} />
            <Route path={"" + "/videos"} element={<Videos />} />
          </Routes>
        </HashRouter>
      </Web3ReactProvider>
    </MessageProvider>
  </ConfigProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
