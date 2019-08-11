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
  handleKeyDown = (event) => {

    let {
      key
    } = event

    if ((/\d/).test(key) || (/[+\-*\/.%]/).test(key)) {
      event.preventDefault()
      this.props.calculate(key);
    } else if (key === 'Delete') {
      event.preventDefault()
      this.props.clear()
    } else if (key === 'Backspace') {
      event.preventDefault()
      this.props.delete()
    } else if (key === "Enter") {
      event.preventDefault()
      this.props.evaluate()
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return ( <div id = 'app' >
        <div className = "calculator-container" >
          <Screen {
          ...this.props
          }/> 
          <Keypad {
          ...this.props
          }/> 
        </div > 
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