import React, { Component } from "react";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen"
import './App.css';

export default class App extends Component {  
    render() {
      return (
        <div className="calculator-container">
          <Screen/>
          <Keypad/>
        </div>
      );
    }
  }