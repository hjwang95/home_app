import React, { Component } from 'react';
// import logo from './images/logo.png';
import './App.css';
import ContentComponet from '../Content/Content.Component';
import TitleComponent from '../Title/Title.Component'



class App extends Component {
  render() {
      return (
        <div>
          <TitleComponent></TitleComponent>
          <ContentComponet></ContentComponet>
        </div>
        
      )
  }
}

export default App;
