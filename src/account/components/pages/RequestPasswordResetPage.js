import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { requestPasswordReset, resetRequestPasswordReset } from "../../ducks";
import { RequestPasswordResetForm } from "../forms";

class RequestPasswordResetPage extends PureComponent {
  componentWillUnmount() {
    this.props.resetRequestPasswordReset();
  }

  onSubmit = ({ userName }) => {
    this.props.requestPasswordReset(userName);
  };

  render() {
    return (
      <Container isLoading={this.props.isRequestingPasswordReset}>
        <RequestPasswordResetForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

RequestPasswordResetPage.propTypes = {
  isRequestingPasswordReset: PropTypes.bool.isRequired,
  requestPasswordReset: PropTypes.func.isRequired,
  resetRequestPasswordReset: PropTypes.func.isRequired
};

const mapStateToProps = state => state.account.requestPasswordReset;

const mapDispatchToProps = dispatch => ({
  requestPasswordReset: userName => dispatch(requestPasswordReset(userName)),
  resetRequestPasswordReset: () => dispatch(resetRequestPasswordReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  RequestPasswordResetPage
);
