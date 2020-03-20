import React, { useState, useEffect, useContext } from 'react';
import StudentCard from '../StudentCard';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import AddStudentModal from '../AddStudentModal';
import API from '../../../utils/API';
import UserContext from '../../../context/user/userContext';
import Students from '../Students';





require('./style.css');

const AddStudents = (props) => {
  // const [students, setStudents] = useState([]);
  // const projectName = props.projectName;

  const userContext = useContext(UserContext);

  const { username, getUser } = userContext;

  const [students, setStudents] = useState([]);



  const getStudentData = async () => {
    const res = await API.getAll();

    setStudents(res.data[0].students);
    // const res = await API.getProjectStudents();

    // console.log (res.data[0].projectName, "project in array");
    // console.log(projectName, "project in props");


    // for (let i = 0; i < res.data.length; i++){

    //   if (res.data[i].projectName === projectName) {

    //     const studentData = res.data[i].students;
    //     console.log(studentData, "STUDENTS IN PROJECT!");
    //     return studentData;

    //   }
    // }
      

    
    

   

    // console.log(res.data);

  }

  useEffect(() => {
    getStudentData(username);
  });


  return (
    <Container>
      <div className="add-students-display">
        <div className="add-students-header">
          <h1>Assign Students</h1>
          <p>To New Project</p>

          <Students students={students} > </Students>

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
