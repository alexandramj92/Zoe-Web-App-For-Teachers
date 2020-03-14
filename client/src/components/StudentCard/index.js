import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
require ('./style.css');

class StudentCard extends Component {
    render () {
        return (
            <div className='student-card'>
                <Avatar id="student-card-icon" alt="Student" src={this.props.icon}></Avatar>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}

export default StudentCard;