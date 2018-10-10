import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register, resetRegister } from "../../ducks";
import { AccountRegisterPanel } from "../styled";
import { RegisterForm } from "../forms";

class RegisterPage extends PureComponent {
  componentWillUnmount() {
    this.props.resetRegister();
  }

  onSubmit = data => {
    this.props.register(data);
  };

  render() {
    const { isRegistering } = this.props;

    return (
      <AccountRegisterPanel isLoading={isRegistering}>
        <RegisterForm onSubmit={this.onSubmit} />
      </AccountRegisterPanel>
    );
  }
}

RegisterPage.propTypes = {
  isRegistering: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  resetRegister: PropTypes.func.isRequired
};

const mapStateToProps = state => state.account.login;

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(register(data)),
  resetRegister: () => dispatch(resetRegister())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
