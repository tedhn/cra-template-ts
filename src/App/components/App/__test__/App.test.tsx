import React from "react";

import { render } from "@testing-library/react";

import App from "../App";
import { add } from "./test";

test("add ", () => {
  expect(add(1)).toEqual(2);
});

test("renders", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("testing-div")).toHaveTextContent("Welcome to React");
});
