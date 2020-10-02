import { render } from "@testing-library/react";
import i18n from "../i18n";
import React from "react";

import TC from "../testcomponent";
import TC2 from "../testcomponent2";

describe("i18n", () => {
  it("should initate i18n", async () => {
    const t = await i18n;

    expect(t).toBeDefined();
  });

  it("should render compoenent with eng translations", () => {
    const { getByTestId } = render(<TC />);

    expect(getByTestId("t-div")).toHaveTextContent(
      "Welcome to React and react-i18next"
    );
  });

  it("should render compoenent with de translations", () => {
    const { getByTestId } = render(<TC2 />);

    expect(getByTestId("t-div")).toHaveTextContent(
      "Willkommen bei react und react-i18next"
    );
  });
});
