export const ActionTypes = {
  WISHLIST: "WISHLIST",
  CART: "CART",
};

export const wishlistAction = (item, operation) => {
  return {
    type: ActionTypes.WISHLIST,
    payload: { data: item, operation: operation },
  };
};

export const cartAction = (item, operation) => {
  return {
    type: ActionTypes.CART,
    payload: { data: item, operation: operation },
  };
};

//for reference....
// dispatch({
//   type: "CART",
//   payload: { data: item, operation: "delete" },
// });

// dispatch({
//   type: "WISHLIST",
//   payload: { data: item, operation: "delete" },
// });
