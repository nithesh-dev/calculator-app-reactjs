import React, { useState, useRef } from "react";

import styles from "./Calculator.module.css";
import buttonStyles from "./Button.module.css";
import InputField from "./InputField";
import Operations from "./Operations";
import Button from "./Button";

const Calculator = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isClearDisabled, setIsClearDisabled] = useState(true);
  const inputsRef = useRef([]);
  const resultRef = useRef();

  const checkDisabled = () => {
    for (let i = 0; i < inputsRef.current.length; i++) {
      if (inputsRef.current[i].value.trim() === "") {
        setIsDisabled(true);
        return;
      }
    }
    setIsDisabled(false);
  };

  const clearResult = () => {
    resultRef.current.value = "";
    setIsClearDisabled(true);
  };

  const assignResult = (value) => {
    resultRef.current.value = value;
    setIsClearDisabled(false);
  };

  const addInputRef = (element) => {
    if (element && !inputsRef.current.includes(element)) {
      inputsRef.current.push(element);
    }
  };

  return (
    <div className={styles.card}>
      <h2>Calculator</h2>
      <div>
        <InputField onChange={checkDisabled} ref={addInputRef} id="1" />
        <InputField onChange={checkDisabled} ref={addInputRef} id="2" />
        <Operations
          ref={inputsRef}
          result={assignResult}
          isDisabled={isDisabled}
        />
      </div>
      <label>Result</label>
      <input data-testid="result-field" type="text" ref={resultRef} readOnly />
      <Button className={buttonStyles.button} onClick={clearResult} isDisabled={isClearDisabled}>
        Clear
      </Button>
    </div>
  );
};

export default Calculator;
