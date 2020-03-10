import React from 'react';
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


require('./login.css');


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    display: 'flex',
    flexWrap: 'wrap',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 250,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const logo = require('./ZoeLogo_Round.png'); 
  const preventDefault = event => event.preventDefault();


  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    checkedB: true,

  });

  const handleChecked = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  return (
    <Container id="login-cont" maxWidth="sm">
    <Card className={classes.root} id="login-card">
      <CardContent>
      <img alt="Zoe Logo" src={logo} id="login-img" />
       <h2>Log in</h2>



       <form className={classes.root} noValidate autoComplete="off">

       <Grid container wrap="nowrap" >
        {/* Email Input */}
        <h4>E-mail</h4>
        </Grid>

        <Grid container wrap="nowrap" >
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
        <FilledInput id="my-input" aria-describedby="my-helper-text" placeholder="School.ad@gmail.com" />
        </FormControl>
        </Grid>

        <Grid container wrap="nowrap" >
        {/* Password Input */}
        <h4>Password</h4>
        </Grid>

        <Grid container wrap="nowrap" >
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            placeholder="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Grid>

        <Grid container wrap="nowrap" >
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

      <Grid container wrap="nowrap" >
        <Link href="#" onClick={preventDefault} variant="body2" className="login-a">
            {'Forgot your password?'}
        </Link>
        </Grid>

        <Grid container wrap="nowrap" >
        <Link href="#" onClick={preventDefault} variant="body2" className="login-a">
            {'Not registered? It\'s here!'}
        </Link>
        </Grid>

        <Grid container wrap="nowrap" id="but-div">
        <Button id="login-but" variant="contained">Connection</Button>
        </Grid>

        </form>

        
      </CardContent>
    </Card>
    </Container>
  );
}
