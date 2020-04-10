import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { navigate } from '@reach/router';

import AuthContext from '../../context/auth/authContext';

require('./login.css');

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    display: 'flex',
    flexWrap: 'wrap'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 250
  }
}));

export default function SimpleCard() {
  // Material UI State
  const classes = useStyles();
  const logo = require('./ZoeLogo_Round.png');
  const preventDefault = event => event.preventDefault();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    checkedB: true
  });

  // Login logic state
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } 
  }, [isAuthenticated]);

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = userData;

  const handleChecked = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // When form submits, username and password are stored in an object, then passed to login function as an argument
  const handleSubmit = event => {
    event.preventDefault();
    if (username === '' || password === '') {
      console.log('Invalid login')
    } else {
      login({
        username,
        password
      });
    }
  };

  //when the user indicates they are not registered yet, they are directed to the registration page
  const handleRegister = event => {
    event.preventDefault();

    navigate('/register');
  };

  return (
    <Grid>
      <Container id="login-cont" maxWidth="sm">
        <Card className={classes.root} id="login-card">
          <CardContent>
            <img alt="Zoe Logo" src={logo} id="login-img" />
            <h2>Log in</h2>

            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Grid container wrap="nowrap">
                {/* Username Input */}
                <h4>Username</h4>
              </Grid>

              <Grid container wrap="nowrap">
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled"
                >
                  <FilledInput
                    id="my-input"
                    name="username"
                    aria-describedby="my-helper-text"
                    placeholder="username"
                    onChange={onChange}
                  />
                </FormControl>
              </Grid>

              <Grid container wrap="nowrap">
                {/* Password Input */}
                <h4>Password</h4>
              </Grid>

              <Grid container wrap="nowrap">
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled"
                >
                  <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={userData.password}
                    onChange={onChange}
                    name='password'
                    placeholder="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid container wrap="nowrap">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.checkedB}
                      onChange={handleChecked('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Remember my information"
                  id="checkbox"
                />
              </Grid>

              <Grid container wrap="nowrap">
                <Link
                  href="#"
                  onClick={preventDefault}
                  variant="body2"
                  className="login-a"
                >
                  {'Forgot your password?'}
                </Link>
              </Grid>

              <Grid container wrap="nowrap">
                <Link
                  href="#"
                  onClick={handleRegister}
                  variant="body2"
                  className="login-a"
                >
                  {"Not registered? It's here!"}
                </Link>
              </Grid>

              <Grid container wrap="nowrap" id="but-div">
                <Button id="login-but" variant="contained" type="submit">
                  Connection
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Grid>
  );
}
