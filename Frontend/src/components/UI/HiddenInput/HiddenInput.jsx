import React from "react";
import styles from "./HiddenInput.scss";
import cx from "classnames";
import AutosizeInput from "react-input-autosize";
export const HiddenInput = ({
  value,
  type,
  hidden_input,
  onChange,
  disabled,
  onKeyUp,
  customRef,
  classNameCustom,
  ...props
}) => {
  return (
    <AutosizeInput
      value={value}
      type={type}
      className={cx([styles.hidden_input, classNameCustom])}
      onChange={onChange}
      disabled={!disabled}
      onKeyUp={onKeyUp}
      ref={customRef}
      {...props}
    />
  );
};
