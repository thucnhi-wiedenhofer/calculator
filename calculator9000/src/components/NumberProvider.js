import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';

//Création de l'objet context NumberContext
export const NumberContext = React.createContext();

/*composant React Provider NumberProvider
useState est valeur initiale*/

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [over9000, setOver9000] = useState(false);
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');
  const [post, setPost] = useState('null');

  /* verifie que la valeur tapée dans le dislay n'a qu'une décimale et 8 chiffres max */ 
  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

//conserve la valeur rentrée pour rentrer une autre valeur
  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

//reset à 0
  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
    setOver9000('');
    
  };

  //reset à 0
  const handleClearCalcul = () => {
        setResult('');
        setOperation('');
  };

//supprime le chiffre d'avant
  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  //operations maths
  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  // met la valeur en négatif
  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);  
          setResult(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`); 
          setOperation(`${number} + ${storedNumber} =`)        
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`); 
          setResult(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);         
          setOperation(`${number} - ${storedNumber} =`) 
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`); 
          setResult(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);         
          setOperation(`${number} / ${storedNumber} =`) 
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          setResult(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);          
          setOperation(`${number} * ${storedNumber} =`) 
          break;
        default:
          break;
      }
      setNumber('');           
    }
  };

  //fonction si resultat dépasse de 9000
  const over = () =>{
    if(storedNumber > 9000){
      setOver9000(true);
    }
  };

  //sauvegarde le dernier calcul
  const save = () =>{
    if(result && setResult) {
      axios
        .post("http://localhost/calculator/api/controllers/addCalcul.php",
        {result: result,
        operation:operation})
        .then((response)=>{
          setPost(response.data);
          console.log(post);
          handleClearCalcul();
        });
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
        over,
        over9000,
        result,
        operation,
        save,
        handleClearCalcul,
        post,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;