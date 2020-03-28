import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import ProjectContext from '../../../context/projects/projectContext';

require('./codeDis.css');

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary'
};

const DisplayCode = () => {
  const projectContext = useContext(ProjectContext);
  const { current, activeProject } = projectContext;

  useEffect(() => {
    activeProject();
  },[]);
  // Needs props: generated code and project name
  const projectCode = current.projectCode
  const projectName = current.projectName
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
      <Button id="back-to-project" variant="contained">
        Back to Project
      </Button>
    </Container>
  );
};

export default DisplayCode;