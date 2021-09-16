import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const MagnificientEqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="white-button" type="button" onClick={() => doMath()}>
      =
    </button>
  );
};


export default MagnificientEqualButton;