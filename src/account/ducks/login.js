import update from 'immutability-helper';
import { push } from 'react-router-redux';
import * as auth from '../services/auth';

// Actions
const START = 'account/login/START';
const COMPLETE = 'account/login/COMPLETE';
const FAIL = 'account/login/FAIL';
const RESET = 'account/login/RESET';

// Initial state
const user = auth.getUser();
const initialState = {
  isLoginFailed: false,
  isLoggingIn: false,
  isLoggedIn: !!user,
  user,
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return update(state, {
        $merge: {
          isLoginFailed: false,
          isLoggingIn: true,
          isLoggedIn: false,
        },
      });

    case COMPLETE:
      return update(state, {
        $merge: {
          isLoginFailed: false,
          isLoggingIn: false,
          isLoggedIn: true,
          user: action.user,
        },
      });

    case FAIL:
      return update(state, {
        $merge: {
          isLoginFailed: true,
          isLoggingIn: false,
          isLoggedIn: false,
        },
      });

    case RESET:
      return update(state, {
        $merge: {
          isLoginFailed: false,
          isLoggingIn: false,
        },
      });

    default:
      return state;
  }
};

// Action creators
const startLogin = () => ({
  type: START,
});

const completeLogin = user => ({
  type: COMPLETE,
  user,
});

const failLogin = () => ({
  type: FAIL,
});

export const login = (email, password) => dispatch => {
  dispatch(startLogin());
  return auth
    .login(email, password)
    .then(user => {
      dispatch(completeLogin(user));
      dispatch(push('/'));
    })
    .catch(() => dispatch(failLogin()));
};

export const resetLogin = () => ({
  type: RESET,
});
