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
    marginTop: 120,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: 20,
  },
  link: {
    textDecoration: "none",

    "&:hover": {
      color: "blue",
      //   textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

const SignUpForm = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        if (token === "") {
          alert("Please enter the token to complete sign up.");
        } else {
          console.log(
            `Name: ${name}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Token: ${token}`
          );
          // Add logic to sign up the user here
          alert("Sign up successful!");
        }
      } else {
        alert("Passwords do not match.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2" gutterBottom>
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Token"
            variant="outlined"
            value={token}
            onChange={handleTokenChange}
            margin="normal"
            fullWidth
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Sign Up
          </Button>
          <Typography
            // className={classes.link}
            variant="body2"
            component="p"
            onClick={props.handleSignInClick}
          >
            Already have an account?{" "}
            <span className={classes.link}> Sign In </span>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};
export default SignUpForm;
