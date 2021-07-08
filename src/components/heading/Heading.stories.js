import React from "react";

import { Heading } from "./Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Main = Template.bind({});
Main.args = {
  size: "xl",
  children: "lorem ipsum dolor sit amet",
};

export const Sub = Template.bind({});
Sub.args = {
  type: "h2",
  size: "lg",
  children: "lorem isum dolor sit amet",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "lorem ipsum dolor sit amet",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "lorem ipsum dolor sit amet",
};

export const Underline = Template.bind({});
Underline.args = {
  underline: true,
  children: "lorem ipsum dolor sit amet",
};

export const Unbold = Template.bind({});
Unbold.args = {
  bold: false,
  children: "lorem ipsum dolor sit amet",
};
