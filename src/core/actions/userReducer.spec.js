import {
  getUser,
  getUserSucceeded,
  getUserFailed,
  GET_USER,
  GET_USER_SUCCEEDED,
  GET_USER_FAILED
} from "./userAction";

describe("userAction", () => {
  it("should create an action to getUser", () => {
    const expectedAction = {
      type: GET_USER
    };
    expect(getUser()).toEqual(expectedAction);
  });

  it("should create an action to getUserSucceeded", () => {
    const data = {
      login: "login",
      name: "Paweł Zawadzki",
      avatar_url: "https://avatars1.githubusercontent.com/u/5946534?v=4"
    };
    const expectedAction = {
      type: GET_USER_SUCCEEDED,
      data
    };
    expect(getUserSucceeded(data)).toEqual(expectedAction);
  });

  it("should create an action to getUserFailed", () => {
    const expectedAction = {
      type: GET_USER_FAILED
    };
    expect(getUserFailed()).toEqual(expectedAction);
  });
});
