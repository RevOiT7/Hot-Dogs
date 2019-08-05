import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Button.scss";

export const Button = ({
  title,
  onClick,
  dark,
  hero,
  active,
  isCard,

  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cx([
        styles.btn,
        dark && styles.btn_dark,
        hero && styles.btn_hero,
        active && styles.btn_active,
        isCard && styles.btn_is_card
      ])}
      {...props}
    >
      {title}
    </button>
  );
};

Button.protoType = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  dark: PropTypes.bool,
  hero: PropTypes.bool,
  active: PropTypes.bool,
  isCard: PropTypes.bool
};

Button.defaultProps = {
  title: "",
  onClick: () => {},
  dark: false,
  hero: false,
  active: false,
  isCard: false
};
