import { createStore, combineReducers } from "redux";
import SectionsReducer from "../reducers/sections";

const rootReducer = combineReducers({
  sections: SectionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const Store = createStore(rootReducer);
