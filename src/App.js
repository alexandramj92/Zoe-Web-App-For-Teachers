import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';
import MainRouter from './components/MainRouter';
import Login from './components/Login';
import CreateProject from './components/CreateProject';



function App() {
  return (
    <div>
      <MainRouter>
        <Navbar />
          <Login />
        <Footer />
      </MainRouter>
     <Navbar />
    {/* <CodeDisplay /> */}
    <CreateProject/>
    <Footer />
    </div>
   
   
  );
}

export default App;
