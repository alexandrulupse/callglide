import update from "immutability-helper";
import { push } from "react-router-redux";
import * as account from "../services/account";

// Actions
const START = "account/requestPasswordReset/START";
const COMPLETE = "account/requestPasswordReset/COMPLETE";
const RESET = "account/requestPasswordReset/RESET";

// Initial state
const initialState = {
  isRequestingPasswordReset: false
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return update(state, { $merge: { isRequestingPasswordReset: true } });

    case COMPLETE:
      return update(state, { $merge: { isRequestingPasswordReset: false } });

    case RESET:
      return update(state, { $merge: initialState });

    default:
      return state;
  }
};

// Action creators
const startRequestPasswordReset = () => ({
  type: START
});

const completeRequestPasswordReset = () => ({
  type: COMPLETE
});

export const requestPasswordReset = email => dispatch => {
  dispatch(startRequestPasswordReset());
  return account.requestPasswordReset(email).then(() => {
    dispatch(completeRequestPasswordReset());
    dispatch(push("/account/password-reset-email-sent"));
  });
};

export const resetRequestPasswordReset = () => ({
  type: RESET
});
