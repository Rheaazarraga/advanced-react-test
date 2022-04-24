import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // the goal will be to change the value as the browser window changes
  const [ size, setSize ] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () => {
    // should update the size value
    setSize(window.innerWidth)
  }

  useEffect(() => {
    // every time resize event takes place, the checkSize event function is invoked
    window.addEventListener('resize', checkSize)
  })

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2></>
  );
};

export default UseEffectCleanup;
