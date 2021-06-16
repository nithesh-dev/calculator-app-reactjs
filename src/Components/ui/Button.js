import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={styles.button}
      type="button"
      onClick={props.onClick}
      disabled={props.isDisabled ? "disabled" : ""}
    >
      {props.children === undefined ? props.id : props.children}
    </button>
  );
};

export default Button;
