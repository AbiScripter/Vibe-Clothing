import {
  cartHandleHelper,
  wishlistHandleHelper,
} from "../../utils/cartReducerHelpers";
import { ActionTypes } from "./CartActionTypes";
import {
  menProducts,
  womenProducts,
  kidsProducts,
} from "../../data/productsData";

const initialState = {
  menProducts: menProducts,
  womenProducts: womenProducts,
  kidsProducts: kidsProducts,
  cart: {},
  wishlist: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART: {
      return cartHandleHelper(state, action);
    }

    case ActionTypes.WISHLIST: {
      return wishlistHandleHelper(state, action);
    }
    default:
      return state;
  }
};

export default cartReducer;
