import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const WonderSave = () => {
  const { save } = useContext(NumberContext);
  return (
    <button type="button" className="white-button" onClick={() => save()}>
      save
    </button>
  );
};

export default WonderSave;