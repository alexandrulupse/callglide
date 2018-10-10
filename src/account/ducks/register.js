import update from "immutability-helper";
import { push } from "react-router-redux";
import doRegister from "../services/register";

// Actions
const START = "account/register/START";
const COMPLETE = "account/register/COMPLETE";
const FAIL = "account/register/FAIL";
const RESET = "account/register/RESET";

// Initial state
const initialState = {
  isRegistering: false
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return update(state, {
        $merge: {
          isRegistering: true
        }
      });

    case COMPLETE:
      return update(state, {
        $merge: {
          isRegistering: false
        }
      });

    case FAIL:
      return update(state, {
        $merge: {
          isRegistering: false
        }
      });

    case RESET:
      return update(state, {
        $merge: {
          isRegistering: false
        }
      });

    default:
      return state;
  }
};

// Action creators
const startRegister = () => ({
  type: START
});

const completeRegister = user => ({
  type: COMPLETE,
  user
});

const failRegister = () => ({
  type: FAIL
});

export const register = data => dispatch => {
  dispatch(startRegister());
  return doRegister(data)
    .then(() => {
      dispatch(completeRegister());
      dispatch(push("/account/register"));
    })
    .catch(() => dispatch(failRegister()));
};

export const resetRegister = () => ({
  type: RESET
});
