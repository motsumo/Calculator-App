import React, {
  Component
} from "react";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen";
import {
  connect
} from "react-redux";
import {
  calculate,
  deleteLastEntry,
  clear,
  evaluateExpression
} from "./store/actions/calculate";
import * as fromCalculator from "./store";
import './App.css';

export class App extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.props.keyPress );
  }

  render() {
    return ( 
    <div id='app'>
      <div className = "calculator-container">
        <Screen {...this.props}/>
        <Keypad {...this.props}/>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
