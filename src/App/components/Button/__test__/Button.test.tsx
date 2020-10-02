import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders properly with the right text", () => {
    const { getByTestId } = render(<Button />);

    expect(getByTestId("test-button")).toHaveTextContent("Click Me");
  });
});
