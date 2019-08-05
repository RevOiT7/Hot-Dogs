import React, { useState } from "react";
import PropsTypes from "prop-types";
import styles from "./Input.scss";
import cx from "classnames";

export const Input = ({
  input,
  placeholder,
  meta: { touched, error, warning },
  big,
  little,
  contact,
  pass,
  reset,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  const onFocusFunc = () => {
    setFocus(true);
  };
  const onBlurFunc = e => {
    if (!e.target.value) {
      setFocus(false);
    }
  };
  if (pass) {
    pass = "password";
  }
  return (
    <div
      className={cx([
        styles.input_wrap,
        contact && styles.input_contact_wrap,
        reset && styles.input_reset_pass
      ])}
    >
      <label
        htmlFor={placeholder}
        className={cx([
          styles.input_label,
          focus && styles.input_label__focus,
          contact && styles.contact_label,
          reset && styles.reset_pass_label
        ])}
      >
        {placeholder}
      </label>
      <input
        id={placeholder}
        onFocus={onFocusFunc}
        onBlur={onBlurFunc}
        value={input && input.value}
        onChange={input ? param => input.onChange(param) : null}
        type={pass}
        className={cx([
          styles.input,
          big && styles.input_big,
          little && styles.input_little,
          error && touched && styles.input_error,
          contact && styles.input_contact,
          reset && styles.reset_pass
        ])}
        {...props}
      />
      {touched && (error && <div className={styles.errorText}>{error}</div>)}
      {/* ||
           (warning && <div className={styles.warningText}>{warning}</div>))} */}
    </div>
  );
};

Input.protoType = {
  placeholder: PropsTypes.string,
  big: PropsTypes.bool,
  little: PropsTypes.bool,
  meta: PropsTypes.object,
  contact: PropsTypes.bool,
  type: PropsTypes.string
};

Input.defaultProps = {
  placeholder: "",
  big: false,
  little: false,
  meta: { touched: false, error: false, warning: false },
  contact: false
  // type: "text"
};
