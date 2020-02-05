import axios from "axios";

export function repositoriesApi(query) {
  return axios
    .get("/api/repositories", {
      params: {
        query
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
