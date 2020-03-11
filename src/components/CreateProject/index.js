import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

require('./style.css');

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        flexGrow: 1,
      },
    },
  }));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [setValue] = React.useState('Controlled');
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  return (
      <Container id="heading" maxWidth="sm">
      <h1>Create a New Project</h1>

      <Grid container spacing={3}>

      <h2>Project Name</h2>

        <Grid item xs={12}>
                <Grid item xs={12}>
                  <TextField
                  defaultValue="Name"
                  variant="filled"
                  class="textField"
                  justify="flex-start"
                  fullWidth
                  />
                </Grid>
        </Grid>

        <h2>Project Description</h2>

        <Grid item xs={12}>
                <Grid item xs={12}>
                  <TextField
                  multiline
                  rows="6"
                  defaultValue="Description of the Project"
                  variant="filled"
                  class="textField"
                  justify="flex-start"
                  fullWidth
                  />
                </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" id="cancel">Cancel</Button>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" id="next">Next</Button>
        </Grid>
      </Grid>

  </Container>
    
    
  );
}
