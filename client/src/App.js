import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import CodeDisplay from './components/projectComponents/CodeDisplay';
import Footer from './components/layouts/Footer';
import CreateProject from './components/CreateProject';
import Login from './pages/Login';
import { Router } from '@reach/router';
import Dashboard from './pages/Dashboard';
import AddStudents from './components/studentComponents/AddStudents';

import UserState from './context/user/UserState';

const App = () => {
  return (
    <UserState>
      <Navbar />
      <Router>
        <Login path="/" />
        <Dashboard path="/dashboard" />
        <CreateProject path="/addproject" />
        <AddStudents path="/addstudents/:projectName" />
        <CodeDisplay path="/code" />
      </Router>
      <Footer />
    </UserState>
  );
};

export default App;
