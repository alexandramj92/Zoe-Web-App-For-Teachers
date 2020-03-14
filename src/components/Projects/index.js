import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from '@reach/router';

class Projects extends Component {
    static defaultProps = {
        projects: [
            {id: 1, name: 'Solar System', code: 'UBE3'},
            {id: 2, name: 'VR Gardening Simulator', code: 'XV6Z'},
            {id: 3, name: 'Nature Exploration', code: '7GRB'}
        ]
    }
    render() {
        return (
            <div>
                <h2>Projects</h2>
                {this.props.projects.map((p) => (
                    <ProjectCard key={p.id} name={p.name} code={p.code} />
                ))}
                <div className='add-button'>
                    <AddCircleOutlineIcon id='add-project-icon'/>
                    <Link to="/addproject"><h3>Add New Project</h3></Link>
                </div>
            </div>
        )
    }
}

export default Projects;