export const LOGIN = "LOGIN";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function login(data) {
  return { type: LOGIN, data };
}

export function loginSucceeded(data) {
  return { type: LOGIN_SUCCEEDED, data };
}

export function loginFailed(data) {
  return { type: LOGIN_FAILED, data };
}
