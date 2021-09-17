import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import WonderSave from './WonderfulSave';

const SaveCalcul = () => {
    const { result } = useContext(NumberContext);
    const { operation} = useContext(NumberContext);
   
    
        return (<div>{operation} {result}</div>);
   
};
export default SaveCalcul;