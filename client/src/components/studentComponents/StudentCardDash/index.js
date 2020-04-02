import React, { Component, useState } from 'react';
import { Avatar } from '@material-ui/core';
require ('./style.css');





const StudentCardDash = (props) => {
  
        return (
           
            <div className='student-card'>
                <Avatar id="student-card-icon" alt="Student" src={props.icon}></Avatar>
                <h4>{props.firstName} {props.lastName} </h4>
            </div>

        )

        
}

export default StudentCardDash;