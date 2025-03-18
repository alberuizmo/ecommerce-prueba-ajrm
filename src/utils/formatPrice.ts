// utils/formatPrice.ts
export const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  