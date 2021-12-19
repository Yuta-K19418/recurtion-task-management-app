import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import SectionsReducer from "../reducers/sections";

const rootReducer = combineReducers({
  sections: SectionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const Store = createStore(rootReducer, applyMiddleware(thunk));
