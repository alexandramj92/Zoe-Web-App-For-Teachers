import React, { useState } from 'react';
import StudentCard from '../StudentCard';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import AddStudentModal from '../AddStudentModal';

require('./style.css');

const AddStudents = () => {
  return (
    <Container>
      <div className="add-students-display">
        <div className="add-students-header">
          <h1>Assign Students</h1>
          <p>To New Project</p>
          {/* Needs props to display students already added */}
        </div>
        <div className="add-students-button-display">
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
    </Container>
  );
};

export default AddStudents;
