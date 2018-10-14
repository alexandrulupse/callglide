import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./store";
import { AuthRoute, Account } from "./account/components";
import { DashboardPageResolver } from "./dashboard/components";
import { Page } from "./common/components";
import registerAuthInterceptor from "./account/services/registerAuthInterceptor";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

registerAuthInterceptor();
const AppRouter = () => (
  <Page>
    <Route exact path="/dashboard" component={DashboardPageResolver} />
    <Redirect to="/dashboard" />
  </Page>
);

render(
  <div style={{ height: "100%" }}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/account" component={Account} />
          <Redirect exact from="/" to="/dashboard" />
          <AuthRoute component={AppRouter} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
