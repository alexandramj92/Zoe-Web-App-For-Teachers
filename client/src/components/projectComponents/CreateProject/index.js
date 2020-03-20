import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link, navigate } from '@reach/router';
import UserContext from '../../../context/user/userContext';
import API from '../../../utils/API';

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
    const userContext = useContext(UserContext);

    const { _id, getUser } = userContext;
    const classes = useStyles();
    const [values, setValues] = React.useState({
      projectName: '',
      projectDescription: '',
      projectCode: ''
    });
  
    const handleChange = event => {
      setValues({...values, [event.target.name]: event.target.value,});
    };

    // When user clicks 'next', project name and description post to the db
    const handleSubmit = event => {
      event.preventDefault();
      const { projectName, projectDescription } = values;

      const userId = _id;

      const projectData = {
        projectName,
        projectDescription,
        userId
        
      }

      
      
      if (!projectData.projectName || !projectData.projectDescription) {
        return;
      }

      // API.getUserId(userId)
      console.log(projectData);
      API.saveProject(projectData)
        .then(navigate(`/addstudents/${projectData.projectName}`))
        .catch(err => console.log(err));

    

    }

  return (

      <Container id="heading" maxWidth="sm">
      <h1>Create a New Project</h1>
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>

      <h2>Project Name</h2>

        <Grid item xs={12}>
                <Grid item xs={12}>
                  <TextField
                  name="projectName"
                  id="filled-textarea"
                  placeholder="Project Name"
                  fullWidth
                  onChange={handleChange}
                  />
                </Grid>
        </Grid>

        <h2>Project Description</h2>

        <Grid item xs={12}>
                <Grid item xs={12}>
                  <TextField
                  name="projectDescription"
                  multiline
                  rows="6"
                  placeholder="Description"
                  id="filled-multiline-textarea"
                  justify="flex-start"
                  onChange={handleChange}
                  fullWidth
                  />
                </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Link to='/dashboard'><Button variant="contained" id="cancel">Cancel</Button></Link>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4} onClick={handleSubmit}>
          <Button variant="contained" id="next">Next</Button>
        </Grid>
      </Grid>
      </form>
  </Container>
    
    
  );
}
