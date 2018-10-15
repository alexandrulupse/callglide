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
  Input
} from "semantic-ui-react";
import { isRequired } from "../../../utils/services/validator";
import focusFirstInvalidField from "../../../utils/services/focusFirstInvalidField";

const LoginForm = ({ isLoginFailed, handleSubmit }) => (
  <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <form onSubmit={handleSubmit} noValidate>
        <Input placeholder="test" />
        <Segment stacked>
          <Header>Log in to Callglide</Header>
          <Container fluid>
            <Field
              fluid
              name="email"
              component={Form.Input}
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              type="text"
              validate={[isRequired]}
            />
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

            <Message>
              <Link to="/account/forgot-password">Forgot your password?</Link>
            </Message>

            <Button.Group fluid>
              <Button color="primary" type="submit">
                Login
              </Button>
            </Button.Group>
          </Container>
        </Segment>
      </form>
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
