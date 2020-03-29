import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import CodeDisplay from './components/projectComponents/CodeDisplay';
import Footer from './components/layouts/Footer';
import CreateProject from './components/projectComponents/CreateProject';
import Login from './pages/Login';
import { Router, Redirect } from '@reach/router';
import Dashboard from './pages/Dashboard';
import ProjectStudents from './components/studentComponents/ProjectStudents';
import NotFound from './pages/NotFound/NotFound';

import ProjectState from './context/projects/ProjectState';
import AuthContext from './context/auth/authContext';

import './App.css';

const App = (props) => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated } = authContext;

  return (
      <ProjectState>
        <Navbar />
        <Router>
          <Login path="/" />
          {isAuthenticated ? <Dashboard path="/dashboard" /> : <Redirect noThrow from="/dashboard" to="/" />}
          {isAuthenticated ? <CreateProject path="/addproject" /> : <Redirect noThrow from="/addproject" to="/" />}
          {isAuthenticated ? <ProjectStudents path="/projectStudents" /> : <Redirect noThrow from="/projectStudents" to="/" />}
          {isAuthenticated ? <CodeDisplay path="/code" /> : <Redirect noThrow from="/code" to="/" />}
          <NotFound default />
        </Router>
        <Footer />
      </ProjectState>
  );
};

export default App;
