import React from "react";
import PropTypes from "prop-types";
import "./flexContainer.css";

export const FlexContainer = ({
  children,
  direction,
  wrap,
  justify,
  align,
  padding,
  margin,
  bg,
  ...props
}) => {
  return (
    <div
      className={`
        bg-${bg}
      `}
      style={{
        display: "flex",
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        padding,
        margin,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

FlexContainer.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "auto",
  ]),
  padding: PropTypes.string,
  margin: PropTypes.string,
  bg: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "light",
    "dark",
    "invisible",
  ]),
  children: PropTypes.any.isRequired,
};

FlexContainer.defaultProps = {
  direction: "row",
  wrap: "nowrap",
  justify: "flex-start",
  align: "flex-start",
  padding: 0,
  margin: 0,
  bg: "invisible",
  children: "",
};
