import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [ users, setUsers ] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    // setUsers(users); will update the default users value - will cause an infinite loop because the useEffect will trigger a re-render
    console.log(users);
  }

  useEffect(() => {
    // perform fetch request
    // cannot make useEffect function async await because it returns a promise
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
    </>);
};

export default UseEffectFetchData;
