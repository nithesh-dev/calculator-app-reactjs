import React from "react";
import Button from "./Button";

import styles from "./Button.module.css";

const Operations = React.forwardRef((props, ref) => {
  const inputs = ref.current;

  const returnPropsResult = (input1, input2, operator, result) => {
    props.result(input1 + " " + operator + " " + input2 + " = " + result);
  };

  const setResult = (result, operatorId) => {
    returnPropsResult(inputs[0].value, inputs[1].value, operatorId, result);
  };

  const add = (value) => {
    setResult(+inputs[0].value + +inputs[1].value, value.target.id);
  };

  const subtract = (value) => {
    setResult(+inputs[0].value - +inputs[1].value, value.target.id);
  };

  const multiply = (value) => {
    setResult(+inputs[0].value * +inputs[1].value, value.target.id);
  };

  const divide = (value) => {
    setResult(+inputs[0].value / +inputs[1].value, value.target.id);
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
