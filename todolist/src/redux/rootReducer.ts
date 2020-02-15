import { combineReducers } from "redux";
import createListsPageReducer from "./reducers/createListsPageReducer";
import createItemsPageReducer from "./reducers/createItemsPageReducer";
export default combineReducers({
  createListsPageReducer,
  createItemsPageReducer
});

//The rootReducer combines all reducers into one
