import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCEEDED,
  GET_REPOSITORIES_FAILED
} from "core/actions/repositoriesAction";

const defaultState = {
  repositories: [],
  isLoading: false,
  isLoaded: false,
  isError: false
};

export default function repositoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_REPOSITORIES:
      return { ...state, isLoading: true, isLoaded: false, isError: false };
    case GET_REPOSITORIES_SUCCEEDED:
      return {
        ...state,
        repositories: action.repositories,
        isLoading: false,
        isLoaded: true,
        isError: false
      };
    case GET_REPOSITORIES_FAILED:
      return {
        ...state,
        repositories: [],
        isLoading: false,
        isLoaded: false,
        isError: true
      };
    default:
      return state;
  }
}
