import React from 'react';

import TheTitle from './TheTitle';
import GreatOperationButton from "./GreatOperationButton";
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import PowerfullClearButton from "./PowerfullClearButton";
import OnlyBackButton from "./OnlyBackButton";
import WonderfulSave from "./WonderfulSave";
import ItSOverNineThousand from "./ItSOverNineThousand";
import SaveCalcul from "./SaveCalcul";
import { CalculatorStyles } from './styles/Styles';


const Calculator = () => (
    <CalculatorStyles>
      <TheTitle />
      <div className="over"> 
        <SaveCalcul/>       
        <ItSOverNineThousand/>
      </div>
      <div className="display">        
        <BeautifulScreen />
      </div>
      <div className="number-pad">
        <PowerfullClearButton />
        <OnlyBackButton />
        <WonderfulSave />
        <GreatOperationButton buttonValue="/" />
        <AmazingNumberButton buttonValue={7} />
        <AmazingNumberButton buttonValue={8} />
        <AmazingNumberButton buttonValue={9} />
        <GreatOperationButton buttonValue="*" />
        <AmazingNumberButton buttonValue={4} />
        <AmazingNumberButton buttonValue={5} />
        <AmazingNumberButton buttonValue={6} />
        <GreatOperationButton buttonValue="-" />
        <AmazingNumberButton buttonValue={1} />
        <AmazingNumberButton buttonValue={2} />
        <AmazingNumberButton buttonValue={3} />
        <GreatOperationButton buttonValue="+" />
        <div className="zero-button">
          <AmazingNumberButton buttonValue={0} />
        </div>
        <AmazingNumberButton buttonValue="." />
        <MagnificientEqualButton />
      </div>
    </CalculatorStyles>
  );
  
  export default Calculator;