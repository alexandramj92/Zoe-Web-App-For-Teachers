import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';
import CreateProject from './components/CreateProject';
import MainRouter from './components/MainRouter';
import Login from './components/Login';



function App() {
  return (
    <div>
      <MainRouter>
        <Navbar />
          <Login />
        <Footer />
      </MainRouter>
    </div>
   
   
  );
}

export default App;
