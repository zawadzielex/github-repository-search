import {
  GET_REPOSITORY,
  GET_REPOSITORY_SUCCEEDED,
  GET_REPOSITORY_FAILED
} from "core/actions/repositoryAction";

const defaultState = {
  repository: {},
  isLoading: false,
  isLoaded: false,
  isError: false
};

export default function repositoryReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_REPOSITORY:
      return { ...state, isLoading: true, isLoaded: false, isError: false };
    case GET_REPOSITORY_SUCCEEDED:
      return {
        ...state,
        repository: action.repository,
        isLoading: false,
        isLoaded: true,
        isError: false
      };
    case GET_REPOSITORY_FAILED:
      return {
        ...state,
        repository: {},
        isLoading: false,
        isLoaded: false,
        isError: true
      };
    default:
      return state;
  }
}
