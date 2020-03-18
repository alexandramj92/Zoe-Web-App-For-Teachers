import React, { Component } from 'react';
import Students from '../Students';
import Projects from '../Projects';
import './dashboard.css';
import API from '../../utils/API';




class Dashboard extends Component  {

    constructor() {
    
    super() 
    this.state = {projects: [], students: []}}
    componentDidMount(){API.getAll()
    .then(response => response.json())         
    // .then(users => this.setState({ projects:  }));    
}

    render() {
        return (
            <div>
                <div className='display-dashboard'>
                    <Projects />
                    <Students />
                </div>
            </div>

        )
    }
}

export default Dashboard;