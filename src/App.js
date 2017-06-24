import React, { Component } from 'react';
import './App.css';

import Main from './Main.js';

class App extends Component {

  constructor(){
    super();
    
  }

  render() {
    return (
      <Main />
    );
  }
}

/*function initialize(){
  if(!localStorage.getItem('notes')){
    let notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}*/

export default App;
