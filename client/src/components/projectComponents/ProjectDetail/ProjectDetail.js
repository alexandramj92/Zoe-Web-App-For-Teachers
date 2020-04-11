import React, { useEffect, useState, useContext } from 'react';
import API from '../../../utils/API';
import ProjectDetailStudentCard from '../../studentComponents/ProjectDetailStudentCard';
import Button from '@material-ui/core/Button';
import AuthContext from '../../../context/auth/authContext';
import { Link } from '@reach/router';
import './style.css';

const ProjectDetail = (props) => {

    const authContext = useContext(AuthContext);

    const { loadUser } = authContext;

    const [project, setProject] = useState({
        projectName: '',
        projectCode: '',
        projectDescription: '',
        projectStudents: []
    })

    const [form, setForm] = useState(false);
 
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
        loadUser(true);
        getProject(projectId);
    }, [])

    const editProject = () => {
        setForm(true);
    }

    const onChange = e =>
        setProject({
            ...project, [e.target.name]: e.target.value
        });
    
    const updateProject = async () => {
        setForm(false);
        const projectData = project;
        console.log(projectData);
        const res = await API.updateProject(projectId, projectData)
        console.log(res.data);
    }

    return (
        <div className="project-detail">
            <div className="project-detail-grid">
            <div className="project-detail-text">
            {form ? 
                <h1>Project: 
                <input
                    type="text"
                    placeholder={projectName}
                    name="projectName"
                    value={projectName}
                    onChange={onChange}
                />
                </h1> : 
            <h1>Project: {projectName}</h1>}
            
            {form ?
                <p><input
                    type="text"
                    placeholder={projectDescription}
                    name="projectDescription"
                    value={projectDescription}
                    onChange={onChange}
                    />
                    </p> : 
            <p>{projectDescription}</p>}
            </div>
            {/* Map students to display here */}
            <div className="student-display-container">
                {projectStudents.map(s => (
                <ProjectDetailStudentCard
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
            {form ? 
            <Button id="submit-edit" onClick={updateProject} variant="contained">
                Update Project
            </Button> : <Button id="edit-project" onClick={editProject} variant="contained">
                Edit Project
            </Button>}
            <Link to="/dashboard">
                <Button id="back-to-project" variant="contained">
                Back to Dashboard
                </Button>
            </Link>
        </div>
    )
}

export default ProjectDetail;
