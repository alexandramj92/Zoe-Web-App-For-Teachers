import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import AuthContext from '../../../context/auth/authContext';
import ProjectContext from '../../../context/projects/projectContext';
import { Link } from '@reach/router';

require('./codeDis.css');

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary'
};

const DisplayCode = () => {
  const authContext = useContext(AuthContext);
  const projectContext = useContext(ProjectContext);
  const { current, activeProject } = projectContext;
  const { loadUser, activeUser } = authContext

  useEffect(() => {
    loadUser(true);
    activeProject();
  },[]);
  // Dynamically render project name and code
  const projectCode = localStorage.getItem('projectCode')
  const projectName = localStorage.getItem('projectName')
  return (
    <Container id="container" maxWidth="sm">
      <h1>Project: {projectName}</h1>
      <Box id="main-box" display="flex" justifyContent="center">
        <Box id="code-box" border={1} {...defaultProps}>
          {' '}
          {projectCode}{' '}
        </Box>
        <p id="instruction">
          Input this code in Zoe VR to connect to this project
        </p>
      </Box>
      <Link to="/dashboard">
        <Button id="back-to-project" variant="contained">
          Back to Dashboard
        </Button>
      </Link>
    </Container>
  );
};

export default DisplayCode;
