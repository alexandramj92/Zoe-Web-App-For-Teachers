import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    GET_PROJECT,
    PROJECT_LOADED,
    SAVE_PROJECT,
    PROJECT_ERROR
} from '../types';

const ProjectState = props => {
    const initialState = {
        projects: null,
        current: {
            projectName: null,
            projectDescription: null,
            projectId: null,
            projectCode: null
        },
        error: null
    };

    const [state, dispatch] = useReducer(projectReducer, initialState)
    
    // Gets saved project from db
    const getProject = async () => {
        try {
            const res = await axios.get('/api/dashboard');
            dispatch({ type: GET_PROJECT, payload: res.data.projects });
          } catch (err) {
            throw err
          }
    }

    const saveProject = async (projectData) => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
        try {
            const res = await axios.post('/api/addproject', projectData, config);
            dispatch({ type: SAVE_PROJECT, payload: res.data})
            loadProject(res.data)
        } catch (err) {
            dispatch({ type: PROJECT_ERROR, payload: err.response.message.msgBody})
        }
    }
    // Load project and set to current
    const loadProject = project => {
        dispatch({ type: PROJECT_LOADED, payload: project})
    }
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                current: state.current,
                error: state.error,
                getProject,
                loadProject,
                saveProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;