import React, { Component } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

require ('./style.css');

class AddStudentButton extends Component {
    render() {
        return (
            <div className='add-button' id='add-students-button'>
                <AddCircleOutlineIcon id='add-student-icon'/>
                <h3>Add Students</h3>
            </div>
        )
    }
}

export default AddStudentButton;