import reducer from "./authReducer";
import { LOGIN_SUCCEEDED, LOGIN_FAILED, LOGIN } from "core/actions/authAction";

describe("authReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoaded: false,
      logged: false
    });
  });

  it("should handle LOGIN_SUCCEEDED", () => {
    expect(
      reducer([], {
        type: LOGIN_SUCCEEDED,
        logged: true,
        isLoaded: true
      })
    ).toEqual({
      logged: true,
      isLoaded: true
    });
  });

  it("should handle LOGIN_FAILED", () => {
    expect(
      reducer([], {
        type: LOGIN_FAILED,
        logged: false,
        isLoaded: true
      })
    ).toEqual({
      logged: false,
      isLoaded: true
    });
  });
});
