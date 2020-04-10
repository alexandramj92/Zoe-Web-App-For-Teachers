import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './style.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import API from '../../../utils/API';

const StudentCardDash = (props) => {

    const [student, setStudent]=useState({
        student: props.name,
        id: props.id
    })

    const { id } = student;
  
    const onDelete = () => {
        console.log(id);
        API.deleteStudent(id)
      };

        return (
           
            <div className='student-card'>
                <DeleteOutlineIcon id='delete-icon' 
                        onClick={onDelete} />
                <Avatar id="student-card-icon" alt="Student" src={props.icon}></Avatar>
                <h4>{props.firstName} {props.lastName} </h4>
            </div>

        )

        
}

export default StudentCardDash;