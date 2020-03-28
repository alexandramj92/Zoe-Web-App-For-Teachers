import axios from 'axios';

export default {
  getUserId: function(userId) {
    return axios.get('/api/users', userId);
  },
  // getProjects: function() {
  //     return axios.get('/api/projects');
  // },
  getProject: function(id) {
    return axios.get('/api/projects/' + id);
  },
  deleteProject: function(id) {
    return axios.delete('/api/deleteproject/' + id);
  },
  saveProject: function(projectData) {
    return axios.post('/api/addproject', projectData);
  },
  saveStudent: function(studentData) {
    return axios.post('/api/addstudent', studentData);
  },
  addProjectStudents: function(projectId, studentData, ) {
    return axios.post('/api/addProjectStudents/' + projectId, studentData)
  },
  getProjectStudents: function(projectId) {
      return axios.get('/api/getProjectStudents/' + projectId);
  },
  getAll: function(username) {
    return axios.get('/api/dashboard', username);
  }
};
