import React, { PureComponent, Fragment } from "react";
import { Loader } from "semantic-ui-react";
// import PropTypes from "prop-types";
import { Resolver } from "../../core/components";
import DashboardPage from "./DashboardPage";

class DashboardPageResolver extends PureComponent {
  loadDependencies = () => {
    return Promise.resolve();
  };

  render() {
    console.log("Resolver??", Resolver);
    return (
      <Fragment>
        <Resolver
          successComponent={DashboardPage}
          loadingComponent={() => <Loader size="large">Loading</Loader>}
          resolve={this.loadDependencies}
        />
      </Fragment>
    );
  }
}

DashboardPageResolver.propTypes = {};

export default DashboardPageResolver;
