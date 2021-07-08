import React from "react";

import { Button } from "./Button";

export default {
  title: "Controls/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Button",
};
