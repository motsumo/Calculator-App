import React, { Component } from "react";
import Keypad from "./components/Keypad/Keypad";
import './App.css';

export class App extends Component {  
    render() {
      return (
        <div className="calculator-container">
          <Keypad/>
        </div>
      );
    }
  }