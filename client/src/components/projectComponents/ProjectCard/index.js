import React, { Component, useState} from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import './style.css';
import API from '../../../utils/API';

const ProjectCard = (props) => {

    // const [projectId, setProjectId] = useState([]);

    const deleteProject = (projectId) => {
      API.deleteProject(projectId); 
      };

        return (
            <div className='project-card' value={props.value} >
                <DeleteOutlineIcon id='delete-icon' value={props.value} onClick={() => deleteProject(props.value)} />


                <h4>{props.name}</h4>
                <p>{props.code}</p>
            </div>
        )
    
};

export default ProjectCard;