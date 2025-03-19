export const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(price);

export const totalWithTax = (price: number, tax: number, quantity: number) =>{
  const total = price * quantity * (1 + tax);
  return formatPrice(total);
}
