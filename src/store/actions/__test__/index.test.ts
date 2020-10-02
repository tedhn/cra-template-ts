import { dummy } from "../index";

describe("action", () => {
  it("returning the right value ", () => {
    const text = "dummy text";
    const expectedAction = {
      type: "dummy_action",
      text: text,
    };

    expect(dummy("dummy text")).toEqual(expectedAction);
  });
});
