import React from 'react';
import StudentCard from '../StudentCard';
import AddStudentModal from '../AddStudentModal';
require('../StudentCard/style.css');

const Students = () => {
  const defaultProps = {
    students: [
      {
        id: 1,
        name: 'Marie Zapata',
        icon: './images/badge-fish_3antennas.png'
      },
      { id: 2, name: 'Emilie Fonjallaz', icon: './images/badge-fish_asia.png' },
      {
        id: 3,
        name: 'Ghofran Atlassian',
        icon: './images/badge-fish_basic.png'
      }
    ]
  };
  return (
    <div>
      <h2>Students</h2>
      {defaultProps.students.map(s => (
        <StudentCard key={s.id} src={s.icon} name={s.name} />
      ))}
      <div className="add-student-modal">
        <AddStudentModal />
      </div>
    </div>
  );
};

export default Students;
