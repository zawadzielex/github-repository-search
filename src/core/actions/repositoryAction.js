/*
 * action types
 */

export const GET_REPOSITORY = "GET_REPOSITORY";
export const GET_REPOSITORY_SUCCEEDED = "GET_REPOSITORY_SUCCEEDED";
export const GET_REPOSITORY_FAILED = "GET_REPOSITORY_FAILED";

/*
 * action creators
 */

export function getRepository(data) {
  return { type: GET_REPOSITORY, data };
}

export function getRepositorySucceeded(data) {
  return { type: GET_REPOSITORY_SUCCEEDED, data };
}

export function getRepositoryFailed() {
  return { type: GET_REPOSITORY_FAILED };
}
