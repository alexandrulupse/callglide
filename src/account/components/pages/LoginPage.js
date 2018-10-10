import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, resetLogin } from '../../ducks';
import { AccountPanel } from '../styled';
import { LoginForm } from '../forms';

class LoginPage extends PureComponent {
  componentWillUnmount() {
    this.props.resetLogin();
  }

  onSubmit = ({ email, password }) => {
    this.props.login(email, password);
  };

  render() {
    const { isLoggingIn, isLoginFailed } = this.props;

    return (
      <AccountPanel isLoading={isLoggingIn}>
        <LoginForm isLoginFailed={isLoginFailed} onSubmit={this.onSubmit} />
      </AccountPanel>
    );
  }
}

LoginPage.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  isLoginFailed: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  resetLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.account.login;

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  resetLogin: () => dispatch(resetLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
