import { Meta, StoryFn } from "@storybook/react";
import CartItem from "../components/CartItem";

// Configuración general de la story
export default {
  title: "Ecommerce/CartItem",
  component: CartItem,
  argTypes: {
    updateQuantity: { action: "updateQuantity" },
    removeFromCart: { action: "removeFromCart" },
  },
} as Meta<typeof CartItem>;

// Template base para las variantes
const Template: StoryFn<typeof CartItem> = (args) => <CartItem {...args} />;

// Variante: Producto normal
export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "Producto de prueba",
  price: 50,
  quantity: 2,
  tax: 0.1,
};

// Variante: Producto con cantidad mínima (1)
export const MinQuantity = Template.bind({});
MinQuantity.args = {
  ...Default.args,
  quantity: 1,
};

// Variante: Producto con un precio alto
export const HighPrice = Template.bind({});
HighPrice.args = {
  ...Default.args,
  price: 999.99,
};

// Variante: Producto con impuestos elevados (IVA del 25%)
export const HighTax = Template.bind({});
HighTax.args = {
  ...Default.args,
  tax: 0.25,
};
