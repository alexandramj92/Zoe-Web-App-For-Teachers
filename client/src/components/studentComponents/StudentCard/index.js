import React, { Component, useState } from 'react';
import { Avatar } from '@material-ui/core';
import API from '../../../utils/API';
require ('./style.css');





const StudentCard = (props) => {
    const [student, setStudent]=useState({
        firstName: props.firstName,
        lastName: props.lastName,
        id: props.id
    })


   

    const studentId = {
       "studentId": student.id
    };
    const projectId = localStorage.getItem('projectId');

    const addProjectStudent = () => {
        console.log(studentId, "This is the Student id!");
        console.log(projectId, "This is the project id!");
        API.addProjectStudents(projectId, studentId);
    }

        return (
            <div className='student-card' onClick={addProjectStudent}>
                <Avatar id="student-card-icon" alt="Student" src={props.icon}></Avatar>
                <h4>{props.firstName} {props.lastName} </h4>
            </div>

        )

        
}

export default StudentCard;