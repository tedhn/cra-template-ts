import { ActionTypes, DA } from "../actions/types";

const initialState: Array<string> = ["asdf"];

export default function dummy(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case DA: {
      return [...state, action.text];
    }
    default: {
      return state;
    }
  }
}
