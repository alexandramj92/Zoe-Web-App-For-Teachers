import React, { useState, useContext, useEffect } from 'react';
// import Students from '../../components/studentComponents/Students';
// import Projects from '../../components/projectComponents/Projects';
import ProjectStudentsDisplay from '../../studentComponents/ProjectStudentsDisplay';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Link } from '@reach/router';

import AddStudentModal from '../AddStudentModal';
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


  // const [students, setStudents] = useState([]);
  const [classStudents, setClassStudents] = useState([]);

  const projectId = localStorage.getItem('projectId');

  const getClassStudentsData = async user => {
    const res = await API.getAll();
    // console.log(res.data);
    // res.filter(res[0].username === username);
    setClassStudents(res.data.students);  
  
  }

  // const getStudentData = async projectId => {

  //   const res = await API.getProjectStudents(projectId);
  //   console.log(res.data[0].students, "Get project students API Call!");
  //   // res.filter(res[0].username === username);
  //   setStudents(res.data[0].students);
  // };


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

      {classStudents.map(s => (
        <StudentCard
          key={s._id}
          id={s._id}
          src={s.icon}
          firstName={s.firstName}
          lastName={s.lastName}
        />
      ))}
      <div className="add-student-modal">
        <AddStudentModal />
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
