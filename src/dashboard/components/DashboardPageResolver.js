import React, { PureComponent, Fragment } from "react";
// import PropTypes from "prop-types";
import { Resolver } from "../../core/components";
import { PageLoading } from "../../common/components/styled";
import DashboardPage from "./DashboardPage";

class DashboardPageResolver extends PureComponent {
  loadDependencies = () => {
    return Promise.resolve();
  };

  render() {
    return (
      <Fragment>
        <Resolver
          successComponent={DashboardPage}
          loadingComponent={PageLoading}
          resolve={this.loadDependencies}
        />
      </Fragment>
    );
  }
}

DashboardPageResolver.propTypes = {};

export default DashboardPageResolver;
