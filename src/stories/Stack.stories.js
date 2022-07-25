import Stack from "../components/Stack";
export default {
  title: "Components/Stack.",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 10 },
  },
};
const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((child) => (
      <div
        style={{
          width: 50,
          height: 50,
          background: "#23d995",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {child + 1}
      </div>
    ))}
  </Stack>
);
export const HorizontalStack = Template.bind({});
HorizontalStack.args = {
  direction: "row",
  wrap: false,
  spacing: 100,
};
