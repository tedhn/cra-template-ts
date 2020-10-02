import React from "react";
import { Translation } from "react-i18next";

const TC = () => (
  <Translation>
    {(t) => <div data-testid="t-div">{t("Welcome to React")}</div>}
  </Translation>
);

export default TC;
