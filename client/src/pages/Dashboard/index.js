import React, { useState, useContext, useEffect } from 'react';
import Students from '../../components/studentComponents/Students';
import Projects from '../../components/projectComponents/Projects';
import './dashboard.css';
import API from '../../utils/API';

import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { user, loadUser } = authContext;

  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);

  const getUserData = async user => {
    const res = await API.getAll();
    setProjects(res.data.projects);
    setStudents(res.data.students);
  };

  useEffect(() => {
    loadUser(true);
    getUserData(user);
  }, [students]);

  return (
    <div>
      <div className="display-dashboard">
      <div className="display-projects">
      <Projects projects={projects} />
      </div>
        <div className="display-students">
        <Students students={students} />
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
