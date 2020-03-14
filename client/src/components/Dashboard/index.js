import React, { Component } from 'react';
import Students from '../Students';
import Projects from '../Projects';
import './dashboard.css';

class Dashboard extends Component  {
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