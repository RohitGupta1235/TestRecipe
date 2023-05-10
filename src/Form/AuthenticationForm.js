import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
    margin: "auto",
    marginTop: 50,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: 20,
  },
}));

export const AuthenticationForm = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {isSignUp ? (
          <SignUpForm handleSignInClick={handleSignInClick} />
        ) : (
          <SignInForm handleSignUpClick={handleSignUpClick} />
        )}
      </Grid>
    </div>
  );
};

export default AuthenticationForm;
