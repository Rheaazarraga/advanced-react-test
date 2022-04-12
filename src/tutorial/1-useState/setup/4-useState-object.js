import React, { useState } from 'react';

const UseStateObject = () => {
  const [ person, setPerson ] = useState({ name: 'bita', age: 7, msg: 'hey bita!' });
  console.log(person);

  const changeMsg = () => {
    /* use spread operator to copy the person object, but only target the msg 
    property to change the msg on the screen and prevent the rest of the object data
     from being wiped */
    setPerson({ ...person, msg:'are you a baby?' });
  }
  return (
  <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.msg}</h3>
  <button className='btn' onClick={changeMsg}>change msg</button>
  </>
  )
};

export default UseStateObject;
