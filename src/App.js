import PropTypes from "prop-types"
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1})); // setState를 사용해야 render가 refresh 된다.
  };
  remove = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  render(){
    return <div>
      <h1>the number count is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.remove}>Remove</button>
    </div>
  }
}

export default App;
