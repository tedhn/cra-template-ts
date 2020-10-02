import { DA } from "./../../actions/types";
import dummy from "../dummy";

describe("dummy reducer", () => {
  it("should return the initial state", () => {
    expect(dummy(undefined, {})).toEqual(["asdf"]);
  });

  it("should handle DA", () => {
    expect(dummy(["asdf"], { type: DA, text: "1234" })).toEqual([
      "asdf",
      "1234",
    ]);
  });
});
