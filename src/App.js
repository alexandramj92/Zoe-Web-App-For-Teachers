import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';
import CreateProject from './components/CreateProject';



function App() {
  return (
    <div>
     <Navbar />
    {/* <CodeDisplay /> */}
    <CreateProject/>
    <Footer />
    </div>
   
   
  );
}

export default App;
