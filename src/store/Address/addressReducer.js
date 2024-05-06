import {
  addAddress,
  deleteAddress,
  editAddress,
  defaultAddress,
} from "../../utils/addressReducerHelpers";

const initalState = {
  addressList: {
    //default address for the inital time
    "2cyuouag": {
      name: "Abilash",
      mobile: "9178912120",
      pincode: "682016",
      address: "12th cross , MG Road",
      city: "Kochi",
      state: "Kerala",
      id: "2cyuouag",
      isDefault: true,
    },
  },
};

const addressReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDRESS": {
      if (action.payload.operation === "add") {
        return addAddress(state, action);
      } else if (action.payload.operation === "delete") {
        return deleteAddress(state, action);
      } else if (action.payload.operation === "edit") {
        return editAddress(state, action);
      } else if (action.payload.operation === "delivery") {
        return defaultAddress(state, action);
      }
      return state;
    }
    default:
      return state;
    //   return {...state, wishlist: { ...state.wishlist, [newItem.id]: { ...newItem } },};
  }
};

export default addressReducer;
