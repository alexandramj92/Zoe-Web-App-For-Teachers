import React, { Component } from 'react';
import StudentCard from '../StudentCard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class Students extends Component {
    static defaultProps = {
        students: [
            {id: 1, name: 'Marie Zapata', icon: '/images/badge-fish_3ante4nnas.png'},
            {id: 2, name: 'Emilie Fonjallaz', icon: '/images/badge-fish_asia.png'},
            {id: 3, name: 'Ghofran Atlassian', icon: '/images/badge-fish_basic.png'}
        ]
    }
    render() {
    return (
        <div>
            <h2>Students</h2>
            {this.props.students.map((s) => (
                <StudentCard key={s.id} name={s.name} icon={s.icon} />
            ))}
            <div className='add-button' id='add-students-button'>
                <AddCircleOutlineIcon id='add-student-icon'/>
                <h3>Add Students</h3>
            </div>
        </div>
    )

    }
}

export default Students;