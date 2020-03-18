import React, { Component, useState } from 'react';
import StudentCard from '../StudentCard';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import AddStudentModal from '../AddStudentModal';

require('./style.css');

class AddStudents extends Component {
    render () {
        return (
            <Container>
                <div className="add-students-display">
                    <div className="add-students-header">
                        <h1>Assign Students</h1>
                        <p>To New Project</p>
                    {/* Add axios call to get students and render them in a list here */}
                    </div>
                    <div className="add-students-button-display">
                        <AddStudentModal />
                    </div>
                    <div className="add-students-button-display">
                        <Link to='/code'><Button variant="contained" id="next">Finish</Button></Link>
                    </div>
                </div>
            </Container>

        )
    }
}

export default AddStudents;