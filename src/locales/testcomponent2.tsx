import i18next from "i18next";
import React, { useEffect } from "react";
import { Translation } from "react-i18next";

const TC2 = () => {
  useEffect(() => {
    i18next.changeLanguage("de");
  }, []);

  return (
    <Translation>
      {(t) => <div data-testid="t-div">{t("Welcome to React")}</div>}
    </Translation>
  );
};

export default TC2;
