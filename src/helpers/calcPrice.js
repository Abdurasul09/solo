export const calcSubPrice = (clothes) => {
  return clothes.count * clothes.price;
};

export const calcTotalPrice = (cart) => {
  let sum = 0;
  cart.products.filter((item) => {
    sum += item.subPrice;
  });
};
// njmk,l.,kmjnmk,
