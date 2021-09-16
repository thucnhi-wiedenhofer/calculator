import React from 'react';

import TheTitle from './TheTitle';
import GreatOperationButton from "./GreatOperationButton";
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from "./AmazingNumberButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import PowerfullClearButton from "./PowerfullClearButton";
import OnlyBackButton from "./OnlyBackButton";
import PoorNegativeButton from "./PoorNegativeButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import { CalculatorStyles } from './styles/Styles';


const Calculator = () => (
    <CalculatorStyles>
      <div className="over">        
        <ItSOverNineThousand/>
      </div>
      <div className="display">
        <TheTitle />
        <BeautifulScreen />
      </div>
      <div className="number-pad">
        <PowerfullClearButton />
        <OnlyBackButton />
        <PoorNegativeButton />
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