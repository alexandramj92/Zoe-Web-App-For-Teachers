import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../utils/API';

import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import { navigate } from '@reach/router';

//custom styles
require('./register.css');

//styles from Material-UI
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

export default function Register() {

    //using material-ui styles
    const classes = useStyles();
    //setting states
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmedPassword:'',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmedPassword: false,
        alert: 'hidden'
      });

    //setting states
      const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmedPassword: ''
      })

      
      const { username, email, password, confirmedPassword } = userData;

      const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });
      const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleClickShowConfirmedPassword = () => {
        setValues({ ...values, showConfirmedPassword: !values.showConfirmedPassword });
        };

      const handleMouseDownPassword = event => {
            event.preventDefault();
        };

      const handleSubmit = event => {
          event.preventDefault();
        
          // perform all neccassary validations
          if (password !== confirmedPassword) {
              setValues({...values, alert : 'visible' });
          } else {
            API.registerUser(userData)
            .then(navigate('/'));
          }
          

      }  



return (
    <Grid>
        <Container id="register-cont" fixed>

        <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >  

        <div id="input-sec">
        <h1>Create Account</h1>

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
                <h4>Email</h4>
              </Grid>

              <Grid container wrap="nowrap">
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled"
                >
                  <FilledInput
                    id="my-input"
                    name="email"
                    aria-describedby="my-helper-text"
                    placeholder="example@email.com"
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
                          className="icon-visible"
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
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled"
                >
                  <FilledInput
                    id="filled-adornment-password"
                    type={values.showConfirmedPassword ? 'text' : 'password'}
                    value={userData.confirmedPassword}
                    onChange={onChange}
                    name='confirmedPassword'
                    placeholder="repeat your password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmedPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          className="icon-visible"
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

              <p className={values.alert}>Passwords don't match</p>

              <Grid container wrap="nowrap" id="but-div">
                <Button id="register-but" variant="contained" type="submit">
                  Register
                </Button>
              </Grid>

              </div>
              
        </form>

        </Container>
    </Grid>
);


};



