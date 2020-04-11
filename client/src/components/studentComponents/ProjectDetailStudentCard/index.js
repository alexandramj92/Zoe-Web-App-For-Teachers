import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './style.css';

const ProjectDetailStudentCard = (props) => {

    const [student, setStudent]=useState({
        student: props.name,
        id: props.id
    })

    const { id } = student;


        return (
           
            <div className='student-card'>
                <Avatar id="student-card-icon" alt="Student" src={props.icon}></Avatar>
                <h4>{props.firstName} {props.lastName} </h4>
            </div>

        )

        
}

export default ProjectDetailStudentCard;