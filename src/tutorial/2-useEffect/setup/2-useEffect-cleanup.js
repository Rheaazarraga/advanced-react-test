import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // the goal will be to change the value as the browser window changes
  const [ size, setSize ] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () => {
    // should update the size value
    setSize(window.innerWidth) // triggers re-render
  };

  useEffect(() => {
    console.log('useEffect');
    // every time resize event takes place, the checkSize event function is invoked
    window.addEventListener('resize', checkSize)
    return () => {
      // will be invoked when we exit
      console.log('cleanup');
      window.removeEventListener('resize', checkSize)
    }
  });
  console.log('render');

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2></>
  );
};

export default UseEffectCleanup;
