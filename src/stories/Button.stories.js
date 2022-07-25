import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    handleClick: { action: "Handle Clicked" },
  },
};
// export const Red = () => <Button label="Press Red" backgroundColor="red" />;
const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  size: "sm",
  label: "red",
};
