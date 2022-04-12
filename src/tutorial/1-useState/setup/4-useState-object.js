import React, { useState } from 'react';

const UseStateObject = () => {
  const [ person, setPerson ] = useState({ name: 'bita', age: 7, msg: 'hey bita!' });
  console.log(person);

  const changeMsg = () => {
    /* use spread operator to copy the person object, but only target the msg 
    property to change the msg on the screen and prevent the rest of the object data
     from being wiped */

    // setPerson({ ...person, msg:'are you a baby?' });

    setMsg('are you a baby?');
  };

  // alternative to using objects - especially if they're big, set up multiple smaller state values with a single value and a function that controls it
  const [name, setName] = useState('bita');
  const [age, setAge] = useState(7);
  const [msg, setMsg] = useState('hey!');


  return (
  <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{msg}</h3>
  <button className='btn' onClick={changeMsg}>change msg</button>
  </>
  )
};

export default UseStateObject;
