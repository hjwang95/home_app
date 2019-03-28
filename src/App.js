import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="My-logo" alt="logo" />
          <p>
          Welcome to Jade's home
          </p>
          <p>
          Here are some personal web projects
          </p>
          <a
            className="App-link"
            href="http://phpsearch-env.agmztsmjdq.us-east-2.elasticbeanstalk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SearchEvent-Web
          </a>
          <a
            className="App-link"
            href="http://angularapp-env.d2urxrpkxx.us-east-2.elasticbeanstalk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SearchEvent_Web_mobile
          </a>
        </header>
      </div>
    );
  }
}

export default App;
