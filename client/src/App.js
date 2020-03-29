import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import CodeDisplay from './components/projectComponents/CodeDisplay';
import Footer from './components/layouts/Footer';
import CreateProject from './components/projectComponents/CreateProject';
import Login from './pages/Login';
import { Router, Redirect } from '@reach/router';
import Dashboard from './pages/Dashboard';
import AddStudents from './components/studentComponents/AddStudents';
import ProjectStudents from './components/studentComponents/ProjectStudents';

import AuthState from './context/auth/AuthState';
import ProjectState from './context/projects/ProjectState';

import './App.css';

// const AuthRoute = ({isAuthenticated, Component, path}) => {
//   axios.get('/isAuthenticated').then(isAuthenticated => {
//     if(isAuthenticated)
//     return <Component path={path} />
//   return <Redirect noThrow from={path} to="/" />
//   })
  
// }

const App = (props) => {
   const isAuthenticated = true;

  return (
    <AuthState>
      <ProjectState>
        <Navbar />
        <Router>
          <Login path="/" />
         {/* <AuthRoute isAuthenticated={isAuthenticated} Component={Dashboard} path='/dashboard' /> */}
          <Dashboard path="/dashboard" />
          <CreateProject path="/addproject" />
          {/* <AddStudents path="/addstudents" /> */}
          <ProjectStudents path="/projectStudents" />
          <CodeDisplay path="/code" />
        </Router>
        <Footer />
      </ProjectState>
    </AuthState>
  );
};

export default App;
