import React, { useState, useContext, useEffect } from 'react';
import StudentCard from '../StudentCard';
import AuthContext from '../../../context/auth/authContext';
import ProjectContext from '../../../context/projects/projectContext';
import './style.css';

require('../StudentCard/style.css');

const ProjectStudentsDisplay = props => {
  const authContext = useContext(AuthContext);
  const projectContext = useContext(ProjectContext);
  const { current } = projectContext;
  const { id, loadUser, activeUser } = authContext;

  useEffect(() => {
    activeUser();
  },[]);



  return (
    <div>
      {props.students.map(s => (
        <StudentCard
          key={s._id}
          value={s._id}
          src={s.icon}
          firstName={s.firstName}
          lastName={s.lastName}
        ></StudentCard>
      ))}
    </div>
  );
};

export default ProjectStudentsDisplay;