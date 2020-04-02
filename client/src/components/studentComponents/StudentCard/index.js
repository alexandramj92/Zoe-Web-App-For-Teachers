import React, { Component, useState } from 'react';
import { Avatar } from '@material-ui/core';
import API from '../../../utils/API';
require ('./style.css');





const StudentCard = (props) => {
    const [student, setStudent]=useState({
        firstName: props.firstName,
        lastName: props.lastName,
        id: props.id,
        selected: false
    })


   

    const studentId = {
       "studentId": student.id
    };
    const projectId = localStorage.getItem('projectId');

    const addProjectStudent = () => {
        console.log(studentId, "This is the Student id!");
        console.log(projectId, "This is the project id!");

            setStudent({...student, selected: true});
            API.addProjectStudents(projectId, studentId);
        


    }

    const removeProjectStudent = () => {
        console.log(studentId, "This is the Student id!");
        console.log(projectId, "This is the project id!");

        setStudent({...student, selected: false});
        API.removeProjectStudents(projectId, studentId);


    }

        return (
            <div>
            {student.selected

             ? <div className='student-card' id= 'selected' onClick={removeProjectStudent}>
                <Avatar id="student-card-icon" alt="Student" src={props.icon}></Avatar>
                <h4>{props.firstName} {props.lastName} </h4>
            </div>

            : <div className='student-card' id= 'notSelected' onClick={addProjectStudent}>
                <Avatar id="student-card-icon" alt="Student" src={props.icon}></Avatar>
                <h4>{props.firstName} {props.lastName} </h4>
            </div>



            }

                
            </div>
           

        )

        
}

export default StudentCard;