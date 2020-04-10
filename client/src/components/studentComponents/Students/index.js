import React, { useContext, useEffect } from 'react';
import StudentCardDash from '../StudentCardDash';
import AddStudentModalDash from '../AddStudentModalDash';
import AuthContext from '../../../context/auth/authContext';
import './style.css';

require('../StudentCard/style.css');

const Students = (props) => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser(true);
    // eslint-disable-next-line
  },[]);

  return (
    <div>
      <h2>Students</h2>
      <div className="student-list">
      {props.students.map(s => (
        <StudentCardDash
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
    </div>
  );
};

export default Students;
