import { createStore } from "redux";
import { todoReducer } from "./reducers";

import * as actions from './actions';

export const store = createStore(todoReducer);
export { actions };