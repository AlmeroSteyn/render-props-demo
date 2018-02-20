import React from 'react';

const AnotherStupidAdder = ({ count, onClick }) => (
  <div>
    <span>{count}</span>
    <button onClick={onClick}>Hello</button>
  </div>
);

export default AnotherStupidAdder;
