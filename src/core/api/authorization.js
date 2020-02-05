import axios from "axios";

export function userApi() {
  return axios
    .get("/api/user")
    .then(function(response) {
      // handle success
      return response.data.user;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

export function githubAuthApi(code) {
  return axios
    .get("/login/github", {
      params: { code }
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
