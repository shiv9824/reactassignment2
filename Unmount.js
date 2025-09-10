import React, { Component } from 'react';

class Unmount extends Component {
  state = { count: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component updated!');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  render() {
    return (
      <div>
        <h2>Unmount Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Unmount;