import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { getStepperData } from './stepperData';

import Stepper from "./Stepper";
import stepperData, { defultData } from './stepperData'

function App() {
  const stepperDetails = getStepperData()
  console.log('stepperDetails',stepperDetails)
  console.log('stepperData',stepperData)
  return (
    <div className="app">
      <h1>Pizza, create your own!</h1>
      <div className="wrapper">
        <Stepper
          steps={stepperDetails}
          defultData={defultData}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
