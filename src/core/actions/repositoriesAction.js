/*
 * action types
 */

export const GET_REPOSITORIES = "GET_REPOSITORIES";
export const GET_REPOSITORIES_SUCCEEDED = "GET_REPOSITORIES_SUCCEEDED";
export const GET_REPOSITORIES_FAILED = "GET_REPOSITORIES_FAILED";

/*
 * action creators
 */

export function getRepositories(data) {
  return { type: GET_REPOSITORIES, data };
}

export function getRepositoriesSucceeded(data) {
  return { type: GET_REPOSITORIES_SUCCEEDED, data };
}

export function getRepositoriesFailed() {
  return { type: GET_REPOSITORIES_FAILED };
}
