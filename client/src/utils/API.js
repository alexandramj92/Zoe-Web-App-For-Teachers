import axios from 'axios';

export default {
    getUser: function() {
        return axios.get('/api/users/' + id);
    },
    getProjects: function() {
        return axios.get('/api/projects');
    },
    getProject: function() {
        return axios.get('/api/projects/' + id);
    },
    deleteProject: function() {
        return axios.delete('/api/projects/' + id);
    },
    saveProject: function() {
        return axios.post('/api/projects', projectData);
    }
};