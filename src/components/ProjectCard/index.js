import React, { Component } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import './style.css';

class ProjectCard extends Component {
    render () {
        return (
            <div className='project-card'>
                <DeleteOutlineIcon id='delete-icon'/>
                <h4>{this.props.name}</h4>
                <p>{this.props.code}</p>
            </div>
        )
    }
};

export default ProjectCard;