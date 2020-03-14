import React, { Component } from 'react';
import StudentCard from '../StudentCard';
import AddStudentModal from '../AddStudentModal';

require('./style.css');

class AddStudents extends Component {
    render () {
        return (
            <div className="add-students-display">
                <div className="add-students-header">
                    <h1>Assign Students</h1>
                    <p>To New Project</p>
                </div>
                <div className="add-students-button-display">
                    <AddStudentModal />
                </div>
            </div>

        )
    }
}

export default AddStudents;