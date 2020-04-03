import React, { useEffect, useState } from 'react';
import API from '../../../utils/API';
import StudentCardDash from '../../studentComponents/StudentCardDash';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';
import './style.css';

// to do:
// get project id from req.params and use id to call 
// the .populate function in the project controller
// using res.data from .populate API call, pass in the data to the project detail component

const ProjectDetail = (props) => {

    const [project, setProject] = useState({
        projectName: '',
        projectCode: '',
        projectDescription: '',
        projectStudents: []
    })

    const projectId = props.id;

    const { projectName, projectCode, projectDescription, projectStudents } = project;

    const getProject = async (projectId) => {
        const res = await API.getProjectStudents(projectId)
        console.log("Response from API", res.data);
        setProject({
            projectName: res.data[0].projectName,
            projectCode: res.data[0].projectCode,
            projectDescription: res.data[0].projectDescription,
            projectStudents: res.data[0].students
        })
      };
    useEffect(() =>  {
        getProject(projectId);
    }, [])

    return (
        <div className="project-detail">
            <div className="project-detail-grid">
            <div className="project-detail-text">
            <h1>Project: {projectName}</h1>
                <p>{projectDescription}</p>
            </div>
            {/* Map students to display here */}
            <div className="student-display-container">
                {projectStudents.map(s => (
                <StudentCardDash
                    key={s._id}
                    id={s._id}
                    src={s.icon}
                    firstName={s.firstName}
                    lastName={s.lastName}
                />
                ))}
            </div>
            </div>
            <div className="code-display-container">
                <h3>{projectCode}</h3>
            </div>
            <Link to="/dashboard">
                <Button id="back-to-project" variant="contained">
                Back to Dashboard
                </Button>
            </Link>
        </div>
    )
}

export default ProjectDetail;
