import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "Click..." } },
};
const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  size: "md",
  label: "Red",
};
export const OliveLargeText = Template.bind({});
OliveLargeText.args = {
  backgroundColor: "olive",
  size: "lg",
  label:
    "Infinity.................................................................",
};
