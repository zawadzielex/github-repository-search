import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PaperLogin } from "./Login.styled";

function Login() {
  return (
    <Grid container align="center" justify="center" direction="column">
      <Grid container justify="center">
        <Grid item xs={11} sm={8} md={4}>
          <PaperLogin elevation={3}>
            <Typography variant="h5" component="h1" gutterBottom>
              Github Repository Search
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/login/oauth/authorize?client_id=0b3eefc0e2cf396b4c5b"
            >
              Login by github
            </Button>
          </PaperLogin>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
