import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [ people, setPeople ] = React.useState(data);

  const removeItem = (id) => {
    // filter out the default value array of names
    // if the person id matches the one being passed in, remove it
    // return only the list of names that don't match the passed in person id
    let newPeople = people.filter((person) => person.id !== id)
    // updated array 
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>clear items</button>
    </>
  )
};

export default UseStateArray;
