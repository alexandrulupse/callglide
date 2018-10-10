import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import RouterPropTypes from "react-router-prop-types";
import { withRouter } from "react-router";
import { Page as PageContainer } from "./styled";
import NavigationBar from "./NavigationBar";

class Page extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    console.log("children", this.props.children);
    return (
      <PageContainer>
        <NavigationBar />
        {this.props.children}
      </PageContainer>
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
