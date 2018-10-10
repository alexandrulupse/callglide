import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';

class Resolver extends PureComponent {
  state = {
    resolved: false,
  };

  componentDidMount() {
    this.isComponentMounted = true;
    const { resolve, redirect, onSuccess, onError, redirectOnError } = this.props;

    resolve()
      .then(result => {
        if (!this.isComponentMounted) return;
        if (onSuccess) onSuccess(result);
        this.setState({ resolved: true });
      })
      .catch(error => {
        if (!this.isComponentMounted) return;
        if (onError) onError(error);
        if (redirectOnError) redirect(redirectOnError);
      });
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  isComponentMounted = false;

  render() {
    const { successComponent: SuccessComponent, loadingComponent: LoadingComponent, successProps } = this.props;
    return this.state.resolved ? <SuccessComponent {...successProps} /> : <LoadingComponent />;
  }
}

Resolver.propTypes = {
  resolve: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  redirectOnError: PropTypes.string,
  successComponent: PropTypes.func.isRequired,
  loadingComponent: PropTypes.func.isRequired,
  successProps: PropTypes.object,
};

Resolver.defaultProps = {
  onSuccess: undefined,
  onError: undefined,
  redirectOnError: undefined,
  successProps: undefined,
};

const mapDispatchToProps = dispatch => ({
  redirect: URL => dispatch(push(URL)),
});

export default withRouter(connect(undefined, mapDispatchToProps)(Resolver));
