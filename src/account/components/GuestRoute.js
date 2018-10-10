import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const GuestRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

GuestRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.account.login.isLoggedIn
});

export default connect(mapStateToProps)(GuestRoute);
