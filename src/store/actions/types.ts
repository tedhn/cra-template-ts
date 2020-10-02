export const DA = "dummy_action";

interface dummyAction {
  type: typeof DA;
  text: string;
}

export type ActionTypes = dummyAction;
