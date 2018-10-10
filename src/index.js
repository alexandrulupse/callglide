import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { ThemeProvider } from "styled-components";
import { store, history } from "./store";
import { injectBaseStyles, theme } from "./core/styles";
import { AuthRoute, Account } from "./account/components";
import { DashboardPageResolver } from "./dashboard/components";
import { Page } from "./common/components";
import registerAuthInterceptor from "./account/services/registerAuthInterceptor";
import registerServiceWorker from "./registerServiceWorker";

injectBaseStyles();
registerAuthInterceptor();
const AppRouter = () => (
  <Page>
    <Route exact path="/dashboard" component={DashboardPageResolver} />
    <Redirect to="/dashboard" />
  </Page>
);

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/account" component={Account} />
          <Redirect exact from="/" to="/dashboard" />
          <AuthRoute component={AppRouter} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();
