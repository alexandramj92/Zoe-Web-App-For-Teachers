import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Link } from '@reach/router';

import AddStudentModalDash from '../AddStudentModalDash';
import StudentCard from '../StudentCard';

import './style.css';
import API from '../../../utils/API';

import AuthContext from '../../../context/auth/authContext';
import ProjectContext from '../../../context/projects/projectContext';


const ProjectStudents = () => {
  const authContext = useContext(AuthContext);
  const projectContext = useContext(ProjectContext);


  const { user, activeUser, loadUser } = authContext;
  const { current, activeProject } = projectContext;


  const [classStudents, setClassStudents] = useState([]);

  const projectId = localStorage.getItem('projectId');

  const getClassStudentsData = async user => {
    const res = await API.getAll();
    setClassStudents(res.data.students);  
  
  }


  useEffect(() => {
    loadUser(true);
    getClassStudentsData(user);
  }, [classStudents]);

  return (
    <Container>
    <div className="add-students-display">
      <div className="add-students-header">
       <h1>Assign Students</h1>
        <p>To New Project</p>
      <div className="student-list">
      {classStudents.map(s => (
        <StudentCard
          key={s._id}
          id={s._id}
          src={s.icon}
          firstName={s.firstName}
          lastName={s.lastName}
        />
      ))}
      </div>
      <div className="add-student-modal">
        <AddStudentModalDash />
      </div>
      <div className="add-students-button-display">
          <Link to="/code">
            <Button variant="contained" id="next">
              Finish
            </Button>
          </Link>
      </div>
      </div>
      </div>
    </Container>
  );
};


export default ProjectStudents;
