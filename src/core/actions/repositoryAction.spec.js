import {
  getRepository,
  getRepositorySucceeded,
  getRepositoryFailed,
  GET_REPOSITORY,
  GET_REPOSITORY_SUCCEEDED,
  GET_REPOSITORY_FAILED
} from "./repositoryAction";

describe("repositoryAction", () => {
  it("should create an action to getRepository", () => {
    const data = "react";
    const expectedAction = {
      type: GET_REPOSITORY,
      data
    };
    expect(getRepository(data)).toEqual(expectedAction);
  });

  it("should create an action to getRepositorySucceeded", () => {
    const data = {
      total_count: 1179423,
      incomplete_results: false,
      items: [
        { id: 10270250, name: "react" },
        { id: 10270250, name: "react-router" }
      ]
    };
    const expectedAction = {
      type: GET_REPOSITORY_SUCCEEDED,
      data
    };
    expect(getRepositorySucceeded(data)).toEqual(expectedAction);
  });

  it("should create an action to getRepositoryFailed", () => {
    const expectedAction = {
      type: GET_REPOSITORY_FAILED
    };
    expect(getRepositoryFailed()).toEqual(expectedAction);
  });
});
