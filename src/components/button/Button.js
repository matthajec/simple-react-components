import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ children, size, color, ...props }) => {
  return (
    <button
      className={`
        btn
        text-${size}
        text-${color}
        border-${color}
      `}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "light", "dark"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  color: "dark",
  size: "md",
  children: "",
};
