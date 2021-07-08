import React from "react";
import PropTypes from "prop-types";
import "./paragraph.css";

export const Paragraph = ({
  children,
  size,
  color,
  bold,
  underline,
  ...props
}) => {
  return (
    <p
      className={`
        text-${size}
        text-${color}
        ${bold && "text-bold"}
        ${underline && "text-underline"}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  bold: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "light", "dark"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  children: PropTypes.any.isRequired,
};

Paragraph.defaultProps = {
  bold: false,
  underline: false,
  color: "dark",
  size: "md",
  children: "",
};
