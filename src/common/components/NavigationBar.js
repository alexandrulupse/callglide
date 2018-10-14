import React, { PureComponent } from "react";
import RouterPropTypes from "react-router-prop-types";
import { withRouter } from "react-router";
import { Menu, Container } from "semantic-ui-react";

class NavigationBar extends PureComponent {
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item to="/dashboard"> Dashboard</Menu.Item>
          <Menu.Item to="/user">Account</Menu.Item>
          <Menu.Item to="/docs">Docs</Menu.Item>
          <Menu.Item to="/support">Support</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

NavigationBar.propTypes = {
  location: RouterPropTypes.location.isRequired
};

export default withRouter(NavigationBar);
