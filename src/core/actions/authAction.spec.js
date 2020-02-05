import {
  login,
  loginSucceeded,
  loginFailed,
  LOGIN,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED
} from "./authAction";

describe("authAction", () => {
  it("should create an action to login", () => {
    const data = "123";
    const expectedAction = {
      type: LOGIN,
      data
    };
    expect(login(data)).toEqual(expectedAction);
  });

  it("should create an action to loginSucceeded", () => {
    const data = true;
    const expectedAction = {
      type: LOGIN_SUCCEEDED,
      data
    };
    expect(loginSucceeded(data)).toEqual(expectedAction);
  });

  it("should create an action to loginFailed", () => {
    const data = false;
    const expectedAction = {
      type: LOGIN_FAILED,
      data
    };
    expect(loginFailed(data)).toEqual(expectedAction);
  });
});
