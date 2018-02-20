import React, { Component } from 'react';

class StupidAdderMain extends Component {
  state = {
    count: 0
  };

  onClickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { render, renderHeader } = this.props;
    return (
      <div>
        <span>Header</span>
        {renderHeader()}
        <span>Above</span>
        {render({
          count: this.state.count,
          onClick: this.onClickHandler
        })}
        <span>Below</span>
      </div>
    );
  }
}

export default StupidAdderMain;
