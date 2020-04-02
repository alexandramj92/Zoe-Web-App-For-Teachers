import React, { useState, useContext, useEffect } from 'react';
import StudentCardDash from '../StudentCardDash';
import AddStudentModalDash from '../AddStudentModalDash';
import AuthContext from '../../../context/auth/authContext';
import ProjectContext from '../../../context/projects/projectContext';
import './style.css';

require('../StudentCard/style.css');

const Students = (props) => {
  const authContext = useContext(AuthContext);
  const projectContext = useContext(ProjectContext);
  const { current } = projectContext;
  const { id, loadUser, activeUser } = authContext;

  useEffect(() => {
    loadUser(true);
  },[]);



  return (
    <div>
      <h2>Students</h2>
      {props.students.map(s => (
        <StudentCardDash
          key={s._id}
          id={s._id}
          src={s.icon}
          firstName={s.firstName}
          lastName={s.lastName}
        />
      ))}
      <div className="add-student-modal">
        <AddStudentModalDash />
      </div>
    </div>
  );
};

export default Students;
