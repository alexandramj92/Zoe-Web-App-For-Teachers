import React, { useState} from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import './style.css';
import API from '../../../utils/API';
import { navigate } from '@reach/router';

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
    
    // To view project detail:
    // Create a function that navigates to project detail 
    // component passing in the project id as a req.param
    const onClick = () => {
        navigate(`/project/${id}`);
    }

        return (
            <div className='project-card'>
                <DeleteOutlineIcon id='delete-icon' 
                    onClick={onDelete} />
                <h4 onClick={onClick}>{props.name}</h4>
                <p>{props.code}</p>
            </div>
        )
    
};

export default ProjectCard;