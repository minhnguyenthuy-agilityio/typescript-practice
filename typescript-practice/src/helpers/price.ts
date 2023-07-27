const getPriceWithDiscount = (
  price: number,
  discountPercent?: number
): number => {
  const priceProduct = discountPercent
    ? price - price * (discountPercent / 100)
    : price;

  return priceProduct;
};

export { getPriceWithDiscount };
