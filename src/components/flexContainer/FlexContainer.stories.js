import React from "react";

import { FlexContainer } from "./FlexContainer";

export default {
  title: "Layout/FlexContainer",
  component: FlexContainer,
};

const Template = (args) => <FlexContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>lorem</p>
      <p>ipsum</p>
      <p>dolor</p>
      <p>sit</p>
      <p>amet</p>
    </>
  ),
};

export const Spaced = Template.bind({});
Spaced.args = {
  justify: "space-between",
  children: (
    <>
      <p>lorem</p>
      <p>ipsum</p>
      <p>dolor</p>
      <p>sit</p>
      <p>amet</p>
    </>
  ),
};

export const Padded = Template.bind({});
Padded.args = {
  justify: "space-between",
  padding: "2em",
  children: (
    <>
      <p>lorem</p>
      <p>ipsum</p>
      <p>dolor</p>
      <p>sit</p>
      <p>amet</p>
    </>
  ),
};

export const VerticalCentered = Template.bind({});
VerticalCentered.args = {
  direction: "column",
  align: "center",
  children: (
    <>
      <p>lorem</p>
      <p>ipsum</p>
      <p>dolor</p>
      <p>sit</p>
      <p>amet</p>
    </>
  ),
};

export const Background = Template.bind({});
Background.args = {
  justify: "space-between",
  padding: "1em",
  bg: "primary",
  children: (
    <>
      <p>lorem</p>
      <p>ipsum</p>
      <p>dolor</p>
      <p>sit</p>
      <p>amet</p>
    </>
  ),
};
