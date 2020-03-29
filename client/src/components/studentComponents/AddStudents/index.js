import React, { useState, useEffect, useContext } from 'react';
import StudentCard from '../StudentCard';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import API from '../../../utils/API';
import ProjectStudentsDisplay from './/'
import AuthContext from '../../../context/auth/authContext';
import AddStudentModal from '../AddStudentModal';
import Students from '../Students';

require('./style.css');

const AddStudents = () => {
  const authContext = useContext(AuthContext);
  const { id, loadUser, activeUser } = authContext;
  useEffect(() => {
    activeUser();
  },[]);
  const [students, setStudents] = useState([])
  return (
    <Container>
      <div className="add-students-display">
        <div className="add-students-header">
          <h1>Assign Students</h1>
          <p>To New Project</p>

          <ProjectStudentsDisplay students = {students} ></ProjectStudentsDisplay>
          <AddStudentModal></AddStudentModal>
        </div>

        <div className="add-students-button-display">
          <Link to="/code">
            <Button variant="contained" id="next">
              Finish
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AddStudents;
