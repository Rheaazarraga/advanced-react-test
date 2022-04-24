import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // the goal will be to change the value as the browser window changes
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  return <h2>useEffect cleanup</h2>;
};

export default UseEffectCleanup;
