import React, { useState } from 'react';
// useState - value, function

const UseStateBasics = () => {
  // new default value: text function that controls the value: setText
  const [ text, setText ] = useState('a title');
  const handleClick = () => {
    // checks current text value and changes it based on title
    if (text === 'a title') {
      // anytime we invoke  the function, whatever value passed in will be the new state value
      setText('hello world');
    } else {
      setText('a title');
    }
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>change title</button>
  </React.Fragment>;
};

export default UseStateBasics;
