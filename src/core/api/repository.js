import axios from "axios";

export function repositoryApi(query) {
  const { owner, repository } = query;
  return axios
    .get("/api/repository", {
      params: {
        owner,
        repository
      }
    })
    .then(function(response) {
      // handle success
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
