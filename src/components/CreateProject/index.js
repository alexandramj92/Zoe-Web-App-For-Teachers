import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

require('./style.css');

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  return (
      <Container id="heading" maxWidth="sm">
      <h1>Create a New Project</h1>
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        <div class="input">
            <h2>Project Name</h2>
            <TextField
            id="outlined-static"
            multiline
            rows="1"
            defaultValue="Name"
            variant="outlined"
            class="textField"
            />
        </div>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-start">
        <div class="input">
            <h2>Project Description</h2>
            <TextField
            id="outlined-multiline-static"
            multiline
            rows="4"
            defaultValue="Description of the Project"
            variant="outlined"
            class="textField"
            />
        </div>
      </Box>
    <Button variant="contained" id="cancel">Cancel</Button>
    <Button variant="contained" id="next">Next</Button>

      </Container>
    
    
  );
}
