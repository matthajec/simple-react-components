import React from "react";
import PropTypes from "prop-types";
import "./heading.css";

export const Heading = ({
  children,
  type,
  size,
  color,
  bold,
  underline,
  ...props
}) => {
  return React.createElement(
    type,
    {
      className: `
        text-${size}
        text-${color}
        ${bold && "text-bold"}
        ${underline && "text-underline"}
      `,
      ...props,
    },
    children
  );
};

Heading.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  bold: PropTypes.bool,
  underline: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "light", "dark"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  children: PropTypes.any.isRequired,
};

Heading.defaultProps = {
  type: "h1",
  bold: true,
  underline: false,
  color: "dark",
  size: "xl",
  children: "",
};
