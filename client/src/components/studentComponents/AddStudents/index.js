import React, { useState, useEffect, useContext } from 'react';
import StudentCard from '../StudentCard';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import API from '../../../utils/API';
import AuthContext from '../../../context/auth/authContext';
import Students from '../Students';
import { ACTIVE_USER } from '../../../context/types';

require('./style.css');

const AddStudents = props => {

  const authContext = useContext(AuthContext);
  const { id, activeUser } = authContext;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    activeUser();
  },[]);


  return (
    <Container>
      <div className="add-students-display">
        <div className="add-students-header">
          <h1>Assign Students</h1>
          <p>To New Project</p>

          <Students students={students}> </Students>
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
