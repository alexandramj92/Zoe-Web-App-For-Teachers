import {
    GET_PROJECT,
    PROJECT_LOADED,
    SAVE_PROJECT,
    PROJECT_ERROR
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_PROJECT:
            return {
                ...state,
                contacts: action.payload
            };
        case SAVE_PROJECT:
            localStorage.setItem('projectId', action.payload._id);
            localStorage.setItem('code', action.payload.code);
            return {
                ...state,
                projects: [action.payload]
            }
        case PROJECT_LOADED:
            return {
                ...state,
                current : [action.payload]
            }
        case PROJECT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
};