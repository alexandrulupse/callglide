import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const HomePage = ({ user: { email } }) => <h1>Welcome.</h1>;

HomePage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => state.account.login;

export default connect(mapStateToProps)(HomePage);
