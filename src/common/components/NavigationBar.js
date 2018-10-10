import React, { PureComponent } from "react";
import RouterPropTypes from "react-router-prop-types";
import { withRouter } from "react-router";
import {
  NavigationBarContainer,
  MainNavigationBar,
  MainNavigationItem
} from "./styled";

class NavigationBar extends PureComponent {
  render() {
    return (
      <NavigationBarContainer>
        <MainNavigationBar>
          <MainNavigationItem to="/dashboard"> Dashboard</MainNavigationItem>
          <MainNavigationItem to="/user">Account</MainNavigationItem>
          <MainNavigationItem to="/docs">Docs</MainNavigationItem>
          <MainNavigationItem to="/support">Support</MainNavigationItem>
        </MainNavigationBar>
      </NavigationBarContainer>
    );
  }
}

NavigationBar.propTypes = {
  location: RouterPropTypes.location.isRequired
};

export default withRouter(NavigationBar);
