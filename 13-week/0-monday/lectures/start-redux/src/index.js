import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
// import App from "./App";
import React, { Component } from "react";



//Goal is to increment the global state
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello"
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <span>{this.props.count}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
      </>
    );
  }
}
//Maps global state to property in component
let mapStateToProps = state => {
  return {
    count: state.count
  };
};
//Allows the store to invoke the function. Reason for syntax.
let mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);
let increaseAction = () => {
  return {
    type: "Increase"
  };
};
let initialState = {
  count: 0
};
let counterReducer = (state, action) => {
  if (state === undefinded) {
    state = initialState;
  }
  if (action.type === "Increase") {
    return {
      ...state,
      count: state.count + 1
    };
  } else {
    return state;
  }
};
let store = createStore(counterReducer);
// export default Counter;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);