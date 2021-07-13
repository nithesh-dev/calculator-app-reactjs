import React from "react";
import Button from "./Button";

import styles from "./Button.module.css";

const Operations = React.forwardRef((props, ref) => {
  const inputs = ref.current;

  const calculateResult = (input1, input2, operator, result) => {
        props.result(String(input1).concat(" ", operator, " ", input2, " = ", result));
  };
  
  const add = (value) => {
      calculateResult(inputs[0].value, inputs[1].value, value.target.id, +inputs[0].value + +inputs[1].value);
  };

  const subtract = (value) => {
      calculateResult(inputs[0].value, inputs[1].value, value.target.id, +inputs[0].value - +inputs[1].value);
  };

  const multiply = (value) => {
      calculateResult(inputs[0].value, inputs[1].value, value.target.id, +inputs[0].value * +inputs[1].value);
  };

  const divide = (value) => {
      calculateResult(inputs[0].value, inputs[1].value, value.target.id, +inputs[0].value / +inputs[1].value);
  };

  return (
    <div className={`${styles["button-form"]}`}>
      <Button id="+" onClick={add} isDisabled={props.isDisabled}>
        +
      </Button>
      <Button id="-" onClick={subtract} isDisabled={props.isDisabled}>
        -
      </Button>
      <Button id="*" onClick={multiply} isDisabled={props.isDisabled}>
        *
      </Button>
      <Button id="/" onClick={divide} isDisabled={props.isDisabled}>
        /
      </Button>
    </div>
  );
});

export default Operations;
