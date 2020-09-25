import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./locales/i18n";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Switch,
} from "react-router-dom";

const App: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const A = () => {
    let match = useRouteMatch();
    console.log(match.url);

    return (
      <div>
        Compoenent A
        <Router>
          <Switch>
            <Route path={`${match.url}/manage/`} exact component={D} />
            <Route path={`${match.url}/:token`} exact component={C} />
          </Switch>
        </Router>
      </div>
    );
  };

  const B = () => <div>Compoenent B</div>;
  const C = () => {
    interface Param {
      token: string;
    }

    let param = useParams<Param>();
    console.log(param.token);

    return <div>Compoenent C</div>;
  };
  const D = () => <div>Compoenent D</div>;

  return (
    <Router>
      <Route path="/" exact component={A} />
      <Route path="/website" component={A} />
      <Route path="/dashboard" component={B} />
    </Router>
  );
};

export default App;
