import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { login, resetLogin } from "../../ducks";
import { LoginForm } from "../forms";

class LoginPage extends PureComponent {
  componentWillUnmount() {
    this.props.resetLogin();
  }

  onSubmit = ({ userName, password }) => {
    this.props.login(userName, password);
  };

  render() {
    const { isLoggingIn, isLoginFailed } = this.props;

    return (
      <Container style={{ height: "100%" }}>
        <LoginForm isLoginFailed={isLoginFailed} onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

LoginPage.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  isLoginFailed: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  resetLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => state.account.login;

const mapDispatchToProps = dispatch => ({
  login: (userName, password) => dispatch(login(userName, password)),
  resetLogin: () => dispatch(resetLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
