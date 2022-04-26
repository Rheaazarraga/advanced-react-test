import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [ isloading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ user, Setuser ] = useState('default user');


  if (isloading) {
    return (
    <div>
      <h1>Loading...</h1>
    </div>
    );
  }
  
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
