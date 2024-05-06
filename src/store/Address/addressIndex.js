import { legacy_createStore as createStore } from "redux";
import addressReducer from "./addressReducer";

const addressStore = createStore(addressReducer);

export default addressStore;
