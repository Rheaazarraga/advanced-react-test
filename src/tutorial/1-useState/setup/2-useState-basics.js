import React, { useState } from 'react';
// useState - function

const UseStateBasics = () => {
  console.log(useState('hello world'));
  const value = useState(1)[0];
  // the function that controls the value in our state:
  const handler = useState(1)[1];
  console.log(value, handler);
  return <h2>useState basic example</h2>;
};

export default UseStateBasics;
