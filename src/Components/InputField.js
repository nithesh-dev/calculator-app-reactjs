import React, { useState } from "react";

import styles from "./InputField.module.css";

const InputField = React.forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const onlyNumber = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setValue(value);
      setErrorMessage();
    } else {
      setErrorMessage(
        <div data-testid="error-message" className={styles.errorMessage}>
          Error! Can enter only a number
        </div>
      );
    }
    props.onChange(value);
  };

  return (
    <div>
      {errorMessage}
      <label className={styles.label}>{"Input " + props.id}</label>
      <input
        key={props.id}
        id={"input" + props.id}
        className={styles.input}
        type="tel"
        value={value}
        ref={ref}
        placeholder={"Enter number " + props.id}
        onChange={onlyNumber}
      />
    </div>
  );
});

export default InputField;
