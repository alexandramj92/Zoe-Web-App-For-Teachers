import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import CodeDisplay from './components/projectComponents/CodeDisplay';
import Footer from './components/layouts/Footer';
import CreateProject from './components/projectComponents/CreateProject';
import Login from './pages/Login';
import { Router } from '@reach/router';
import Dashboard from './pages/Dashboard';
import AddStudents from './components/studentComponents/AddStudents';

import AuthState from './context/auth/AuthState';

import './App.css';

const App = () => {

  return (
    <AuthState>
      <Navbar />
      <Router>
        <Login path="/" />
        <Dashboard path="/dashboard" />
        <CreateProject path="/addproject" />
        <AddStudents path="/addstudents" />
        <CodeDisplay path="/code" />
      </Router>
      <Footer />
    </AuthState>
  );
};

export default App;
