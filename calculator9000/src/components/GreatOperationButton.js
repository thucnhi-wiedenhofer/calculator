import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const GreatOperationButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default GreatOperationButton;