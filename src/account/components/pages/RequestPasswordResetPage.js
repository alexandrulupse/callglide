import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestPasswordReset, resetRequestPasswordReset } from '../../ducks';
import { AccountPanel } from '../styled';
import { RequestPasswordResetForm } from '../forms';

class RequestPasswordResetPage extends PureComponent {
  componentWillUnmount() {
    this.props.resetRequestPasswordReset();
  }

  onSubmit = ({ email }) => {
    this.props.requestPasswordReset(email);
  };

  render() {
    return (
      <AccountPanel isLoading={this.props.isRequestingPasswordReset}>
        <RequestPasswordResetForm onSubmit={this.onSubmit} />
      </AccountPanel>
    );
  }
}

RequestPasswordResetPage.propTypes = {
  isRequestingPasswordReset: PropTypes.bool.isRequired,
  requestPasswordReset: PropTypes.func.isRequired,
  resetRequestPasswordReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.account.requestPasswordReset;

const mapDispatchToProps = dispatch => ({
  requestPasswordReset: email => dispatch(requestPasswordReset(email)),
  resetRequestPasswordReset: () => dispatch(resetRequestPasswordReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestPasswordResetPage);
