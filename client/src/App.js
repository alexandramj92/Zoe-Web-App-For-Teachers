import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';
import CreateProject from './components/CreateProject';
import Login from './components/Login';
import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import AddStudents from './components/AddStudents';


function App() {
  return (
    <div>
        <Navbar />
          <Router>
            <Login path="/" />
            <Dashboard path="/dashboard" />
            <CreateProject path="/addproject" />
            <AddStudents path="/addstudents/:projectName" />
            <CodeDisplay path="/code" />
          </Router>
        <Footer />
    </div>
  );
}

export default App;
