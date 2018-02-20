import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StupidAdder extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  state = {
    anotherCount: 100
  };

  anotherOnClickHandler = () => {
    this.setState({ anotherCount: this.state.anotherCount - 1 });
  };

  render() {
    const { count, onClick } = this.props;
    return (
      <div>
        <span>{this.state.anotherCount}</span>
        <button onClick={this.anotherOnClickHandler}>My own state</button>
        <span>{count}</span>
        <button onClick={onClick}>Hello</button>
      </div>
    );
  }
}

export default StupidAdder;
