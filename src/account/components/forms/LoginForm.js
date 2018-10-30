import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Message,
  Grid,
  Segment,
  Form,
  Input,
  Icon
} from "semantic-ui-react";
import { isRequired } from "../../../utils/services/validator";
import focusFirstInvalidField from "../../../utils/services/focusFirstInvalidField";

const LoginForm = ({ isLoginFailed, handleSubmit }) => (
  <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <form onSubmit={handleSubmit} noValidate>
        <Segment >

          <Header>Log in to Callglide</Header>

            <Field
              fluid
              name="userName"
              component={Form.Input}
              icon="user"
              iconPosition="left"
              placeholder="User name"
              type="text"
              validate={[isRequired]}
            />
            <p/>
            <Field
              fluid
              name="password"
              component={Form.Input}
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              validate={[isRequired]}
            />

            {isLoginFailed && <Message>Invalid login credentials</Message>}

            <p/>
            <Button.Group fluid>
              <Button type="submit" primary>
								<Icon name="unlock alternate"></Icon>
                Log in
              </Button>
            </Button.Group>

        </Segment>

      </form>
      <Message>
        <Link to="/account/forgot-password">Forgot your password?</Link>
      </Message>
      <Message to="/account/register">
        Not yet a user? Register <Link to="/account/register">here</Link>!
      </Message>
    </Grid.Column>
  </Grid>
);

LoginForm.propTypes = {
  isLoginFailed: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login",
  onSubmitFail: focusFirstInvalidField
})(LoginForm);
