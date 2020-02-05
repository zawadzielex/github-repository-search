import { LOGIN_SUCCEEDED, LOGIN_FAILED } from "core/actions/authAction";

const defaultState = {
  isLoaded: false,
  logged: false
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return { ...state, logged: action.logged, isLoaded: true };
    case LOGIN_FAILED:
      return { ...state, logged: action.logged, isLoaded: true };
    default:
      return state;
  }
}
