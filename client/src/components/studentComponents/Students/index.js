import React, { useState, useContext, useEffect } from 'react';
import StudentCard from '../StudentCard';
import AddStudentModal from '../AddStudentModal';
import AuthContext from '../../../context/auth/authContext';
import ProjectContext from '../../../context/projects/projectContext';
import './style.css';

require('../StudentCard/style.css');

const Students = props => {
  const authContext = useContext(AuthContext);
  const projectContext = useContext(ProjectContext);
  const { current } = projectContext;
  const { id, loadUser, activeUser } = authContext;

  useEffect(() => {
    loadUser();
    activeUser();
  },[]);

  const [student, setStudent] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    id: props._id
  });

  const onClick = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Students</h2>
      {props.students.map(s => (
        <StudentCard
          key={s._id}
          value={s._id}
          src={s.icon}
          firstName={s.firstName}
          lastName={s.lastName}
          onClick={onClick}
        ></StudentCard>
      ))}
      <div className="add-student-modal">
        <AddStudentModal />
      </div>
    </div>
  );
};

export default Students;
