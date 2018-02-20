import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AdderMainChild extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    count: 0
  };

  onClickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <span>Above</span>
        {children({
          count: this.state.count,
          onClick: this.onClickHandler
        })}
        <span>Below</span>
      </div>
    );
  }
}

export default AdderMainChild;
