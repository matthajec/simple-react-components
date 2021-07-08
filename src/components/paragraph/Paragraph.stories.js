import React from "react";

import { Paragraph } from "./Paragraph";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "lorem ipsum dolor sit amet",
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

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "lorem ipsum dolor sit amet",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "lorem ipsum dolor sit amet",
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  children: "lorem ipsum dolor sit amet",
};

export const Underline = Template.bind({});
Underline.args = {
  underline: true,
  children: "lorem ipsum dolor sit amet",
};
