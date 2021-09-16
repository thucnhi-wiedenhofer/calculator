import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const AmazingNumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default AmazingNumberButton;