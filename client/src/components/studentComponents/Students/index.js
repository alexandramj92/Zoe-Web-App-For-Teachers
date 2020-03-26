import React, { useState } from 'react';
import StudentCard from '../StudentCard';
import AddStudentModal from '../AddStudentModal';
import './style.css';

require('../StudentCard/style.css');

const Students = props => {
  const [values, setValues] = useState([]);

  const onClick = event => {
    event.preventDefault();
    console.log('clicked!');
    console.log(event.target.value);
    const valClicked = event.target.value;
    setValues(valClicked);
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
