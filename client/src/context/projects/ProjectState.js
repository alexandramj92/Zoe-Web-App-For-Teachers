import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    GET_PROJECT,
    PROJECT_LOADED,
    SAVE_PROJECT,
    PROJECT_ERROR,
    ACTIVE_PROJECT
} from '../types';

const ProjectState = props => {
    const initialState = {
        projects: null,
        current: {
            projectName: null,
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
    // Called when project is saved from Create Project component
    const saveProject = async (projectData) => {
        try {
            const res = await axios.post('/api/addproject', projectData);
            dispatch({ type: SAVE_PROJECT, payload: res.data})
            loadProject(res.data.project)
        } catch (err) {
            dispatch({ type: PROJECT_ERROR, payload: err.response.message.msgBody})
        }
    }
    // Load project and set to current
    const loadProject = project => {
        dispatch({ type: PROJECT_LOADED, payload: project})
    }

    // Set project to active
    const activeProject = () => {
        if (state.current) {
          const pName = localStorage.getItem('projectName');
          const pId = localStorage.getItem('projectId');
          const pCode = localStorage.getItem('code');
          dispatch({
            type: ACTIVE_PROJECT,
            payload: pName, pId, pCode
          })
        } else {
          return state;
        }
      }
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                current: state.current,
                error: state.error,
                getProject,
                loadProject,
                saveProject,
                activeProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;