import React, { Component, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
require ('./style.css');





const StudentCard = ({value, icon, firstName, lastName, onClick} ) => {

  // const childClick = (event) =>  { onClick(event.target.value);}
        return (
            <div className='student-card' value={value} onClick={onClick}>
                <Avatar id="student-card-icon" alt="Student" src={icon}></Avatar>
                <h4>{firstName} {lastName} </h4>
            </div>

        )

        
}

export default StudentCard;