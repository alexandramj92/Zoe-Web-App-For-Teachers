import React, { Component, useState} from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import './style.css';
import API from '../../../utils/API';

const ProjectCard = (props) => {
    const [project, setProject]=useState({
        project: props.name,
        id: props.id
    })

    const { id } = project;

    const onDelete = () => {
        console.log(id);
        API.deleteProject(id)
      };

        return (
            <div className='project-card'>
                <DeleteOutlineIcon id='delete-icon' 
                    onClick={onDelete} />
                <h4>{props.name}</h4>
                <p>{props.code}</p>
            </div>
        )
    
};

export default ProjectCard;