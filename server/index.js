const express = require("express");
var session = require("cookie-session");
var cookieParser = require("cookie-parser");
const app = express();
const port = 5000;
const axios = require("axios");
const getTokenData = require("./getTokenData");

var expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
app.use(
  session({
    name: "session",
    keys: ["access_token"],
    cookie: {
      secure: true,
      httpOnly: true,
      domain: "localhost:3000",
      expires: expiryDate
    }
  })
);

app.use(cookieParser());

const cliendId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

app.get("/login/github", (req, res) => {
  const code = req.query.code;

  axios
    .post("https://github.com/login/oauth/access_token", {
      client_id: cliendId,
      client_secret: clientSecret,
      code
    })
    .then(({ data }) => {
      const responseGithub = getTokenData(data);
      responseGithub.access_token
        ? res.cookie("access_token", responseGithub.access_token, { maxAge: 360000 })
        : res.cookie("access_token", "", { maxAge: 0 });

      return responseGithub.access_token ? res.send({ logged: true }) : res.send({ logged: false });
    })
    .catch(error => {
      console.log(error.data);
    });
});

app.get("/api/user", (req, res) => {
  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${req.cookies.access_token}`
      }
    })
    .then(({ data }) => {
      const { login, name, avatar_url } = data;
      const user = {
        login,
        name,
        avatar_url
      };
      res.send({ user });
    });
});

app.get("/api/repository", (req, res) => {
  const { owner, repository } = req.query;
  return axios
    .get(`https://api.github.com/repos/${owner}/${repository}`, {
      headers: {
        Authorization: `Bearer ${req.cookies.access_token}`
      }
    })
    .then(({ data }) => {
      res.send(data);
    });
});

app.get("/api/repositories", (req, res) => {
  return axios
    .get("https://api.github.com/search/repositories", {
      headers: {
        Authorization: `Bearer ${req.cookies.access_token}`
      },
      params: {
        q: req.query.query
      }
    })
    .then(({ data }) => {
      res.send(data);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
