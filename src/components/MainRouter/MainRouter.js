import React, { Component } from 'react';
import { Router } from '@reach/router';
import AppProvider from '../context/AppProvider';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProject from './components/AddProject';
import AddStudents from './components/AddStudents';
import CodeDisplay from './components/CodeDisplay';
import Project from './components/Project';
import Student from './components/Student';

class MainRouter extends Component {
    render() {
        return(
            <Router>
                <Login path="/"/>
                {/* <Dashboard path="/dashboard" /> */}
                <AddProject path="/addproject" />
                {/* <AddStudents path="/addstudents" />
                <CodeDisplay path="/code" />
                <Project path="/project/:id" />
                <Student path="/student/:id" /> */}
            </Router>
        )
    }
}

export default MainRouter;