import { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/Toast"; // Ajusta la ruta según la estructura de tu proyecto

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["success", "error"],
    },
    message: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: "Operación exitosa",
    type: "success",
    onClose: () => console.log("Toast cerrado"),
  },
};

export const Error: Story = {
  args: {
    message: "Ocurrió un error",
    type: "error",
    onClose: () => console.log("Toast cerrado"),
  },
};
