const getPriceWithDiscount = (
  price: number,
  discountPercent?: number
): string => {
  const priceProduct = discountPercent
    ? price - price * (discountPercent / 100)
    : price;

  return priceProduct.toFixed(2);
};

export { getPriceWithDiscount };
