import React from "react";
import PropTypes from "prop-types";
import RouterPropTypes from "react-router-prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

const AuthRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/account/login", state: { from: props.location } }}
        />
      )
    }
  />
);

AuthRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  location: RouterPropTypes.location
};

AuthRoute.defaultProps = {
  location: undefined
};

const mapStateToProps = state => ({
  isLoggedIn: state.account.login.isLoggedIn
});

export default connect(mapStateToProps)(AuthRoute);
