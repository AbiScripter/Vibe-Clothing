import { legacy_createStore as createStore } from "redux";
import cartReducer from "./CartReducer";

const cartStore = createStore(cartReducer);

export default cartStore;
