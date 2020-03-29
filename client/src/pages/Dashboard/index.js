import React, { useState, useContext, useEffect } from 'react';
import Students from '../../components/studentComponents/Students';
import Projects from '../../components/projectComponents/Projects';
import './dashboard.css';
import API from '../../utils/API';

import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { user, activeUser, loadUser } = authContext;

  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);

  const getUserData = async user => {
    const res = await API.getAll();
    console.log(res.data);
    // res.filter(res[0].username === username);
    setProjects(res.data.projects);
    setStudents(res.data.students);
  };

  useEffect(() => {
    loadUser(true);
    getUserData(user);
  }, []);

  return (
    <div>
      <div className="display-dashboard">
        <Projects projects={projects} />
        <Students students={students} />
      </div>
    </div>
  );
};

export default Dashboard;
