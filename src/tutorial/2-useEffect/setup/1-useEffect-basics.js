import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // *** hooks cannot be placed in conditionals, must be within useEffect ***
  useEffect(() => {
    console.log('call useEffect');
    if(value >= 1) {
    document.title = `New Msgs(${value})`;
    }
  })
  console.log('render component"');
  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=> setValue(value +1)}>Click me!</button>
    </>
  )
};

export default UseEffectBasics;
