import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
export const Store = createStore(rootReducer);
