import React, {Component} from 'react';
import './App.css';
import {HelloWorld} from "./HelloWorld";
import {ConnectedCounter} from "./Counter";
import {Clock} from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <HelloWorld name={"C.A.G"}/>
        </header>
          <p>Hej och välkommen</p>
          <Clock />
          <ConnectedCounter />
      </div>
    );
  }
}

export default App;
