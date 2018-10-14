import React, { PureComponent } from "react";
import RouterPropTypes from "react-router-prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Menu, Container } from "semantic-ui-react";

class NavigationBar extends PureComponent {
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item>
            <Link to="/dashboard"> Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/user"> Account</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/docs"> Docs</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/support"> Support</Link>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

NavigationBar.propTypes = {
  location: RouterPropTypes.location.isRequired
};

export default withRouter(NavigationBar);
