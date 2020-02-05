import {
  getRepositories,
  getRepositoriesSucceeded,
  getRepositoriesFailed,
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCEEDED,
  GET_REPOSITORIES_FAILED
} from "./RepositoriesAction";

describe("RepositoriesAction", () => {
  it("should create an action to getRepositories", () => {
    const data = "react";
    const expectedAction = {
      type: GET_REPOSITORIES,
      data
    };
    expect(getRepositories(data)).toEqual(expectedAction);
  });

  it("should create an action to getRepositoriesSucceeded", () => {
    const data = {
      total_count: 1179423,
      incomplete_results: false,
      items: [
        { id: 10270250, name: "react" },
        { id: 10270250, name: "react-router" }
      ]
    };
    const expectedAction = {
      type: GET_REPOSITORIES_SUCCEEDED,
      data
    };
    expect(getRepositoriesSucceeded(data)).toEqual(expectedAction);
  });

  it("should create an action to getRepositoriesFailed", () => {
    const expectedAction = {
      type: GET_REPOSITORIES_FAILED
    };
    expect(getRepositoriesFailed()).toEqual(expectedAction);
  });
});
