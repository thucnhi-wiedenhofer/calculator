import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ItSOverNineThousand = () => {
  const { over } = useContext(NumberContext);
  const { over9000 } = useContext(NumberContext);

  over();

  if (over9000 === true){
  return (
    <p>It's Over 9000 !!!</p> 
  );
  }else{
      return null
  }
};

export default ItSOverNineThousand;