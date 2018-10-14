import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RouterPropTypes from "react-router-prop-types";
import { withRouter } from "react-router";
import { Container } from "semantic-ui-react";
import NavigationBar from "./NavigationBar";

class Page extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Container>
        <NavigationBar />
        {this.props.children}
      </Container>
    );
  }
}

Page.propTypes = {
  location: RouterPropTypes.location.isRequired,
  children: PropTypes.node.isRequired
};

Page.defaultProps = {
  location: undefined
};

export default withRouter(Page);
