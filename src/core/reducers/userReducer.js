import { GET_USER_SUCCEEDED, GET_USER_FAILED } from "core/actions/userAction";

const defaultState = {
  user: null
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_SUCCEEDED:
      return { ...state, user: action.user };
    case GET_USER_FAILED:
      return { ...state, user: null };
    default:
      return state;
  }
}
