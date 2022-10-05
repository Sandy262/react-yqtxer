import React from 'react';
import './style.css';
import First from './First';
import Second from './Second';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      x: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  incX = () => {
    if (this.state.count % 2 === 0) {
      this.setState({ x: this.state.x + 1 });
    }
  };
  render() {
    console.log('App rendered');
    return (
      <div className="mybox">
        <h1>App... Count:{this.state.count}</h1>
        <h2>X:{this.state.x}</h2>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.incX}>IncrementX</button>
        <First x={this.state.x}></First>
        <Second x={this.state.x}></Second>
      </div>
    );
  }
}

export default App;
