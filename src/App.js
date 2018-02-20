import React, { Component } from 'react';
import StupidAdderMain from './StupidAdderMain';
import StupidAdder from './StupidAdder';
import AnotherStupidAdder from './AnotherStupidAdder';
import AdderMainChild from './AdderMainChild';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <StupidAdderMain  render={props => <StupidAdder {...props} />} renderHeader={() => <span>I am comp1</span>} />
          <StupidAdderMain
            render={props => <AnotherStupidAdder {...props} />}
            renderHeader={() => <span>I am comp2</span>}
          />
          <AdderMainChild>
            {props => <AnotherStupidAdder {...props} />}

          </AdderMainChild>
        </div>
      </div>
    );
  }
}

export default App;
