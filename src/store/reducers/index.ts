import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "../../utils/history";
import dummy from "./dummy";

export const createReducer = () => {
  return combineReducers({
    /*router: connectRouter(history)*/
    dummy,
  });
};
