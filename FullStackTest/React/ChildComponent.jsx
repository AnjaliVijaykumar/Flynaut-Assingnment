
import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const ChildComponent = () => {
  const data = useContext(DataContext);

  return <h1>{data}</h1>;
};

export default ChildComponent;
