import React from 'react';
import ProjectCard from '../ProjectCard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from '@reach/router';

const Projects = (props) => {


  return (
    <div>
      <h2>Projects</h2>
      {props.projects.map(p => (
        <ProjectCard key={p._id} value={p._id} name={p.projectName} code={p.projectCode} />
      ))}
      <div className="add-button">
        <AddCircleOutlineIcon id="add-project-icon" />
        <Link to="/addproject">
          <h3>Add New Project</h3>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
