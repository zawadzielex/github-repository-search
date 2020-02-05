/*
 * action types
 */

export const GET_USER = "GET_USER";
export const GET_USER_SUCCEEDED = "GET_USER_SUCCEEDED";
export const GET_USER_FAILED = "GET_USER_FAILED";

/*
 * action creators
 */

export function getUser(data) {
  return { type: GET_USER, data };
}

export function getUserSucceeded(data) {
  return { type: GET_USER_SUCCEEDED, data };
}

export function getUserFailed() {
  return { type: GET_USER_FAILED };
}
