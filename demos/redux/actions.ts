import { ADD } from "./types";

export const add = (text) => ({ type: ADD, data: { text } });