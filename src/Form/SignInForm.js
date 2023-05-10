import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
const SignInForm = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // alert("login succesfully");
    console.log("login succesfuly");
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2" gutterBottom>
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            component={Link}
            to="/add"
          >
            Sign In
          </Button>
          <Typography
            // className={classes.link}
            variant="body2"
            component="p"
            style={{}}
            onClick={props.handleSignUpClick}
          >
            Don't have an account?{" "}
            <span className={classes.link}> Sign Up </span>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};
export default SignInForm;
