import axios from 'axios';

export default {
    getUser: function(id) {
        return axios.get('/api/users/' + id);
    },
    getProjects: function() {
        return axios.get('/api/projects');
    },
    getProject: function(id) {
        return axios.get('/api/projects/' + id);
    },
    deleteProject: function(id) {
        return axios.delete('/api/projects/' + id);
    },
    saveProject: function(projectData) {
        // Async testing function
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve({data:{success: true}})
        //     }, 1000)
        // })
        return axios.post('/api/projects', projectData);
    },
    saveStudent: function(studentData) {
        return axios.post('/api/students', studentData);
    },
    getStudents: function() {
        return axios.get('/api/students');
    }
};