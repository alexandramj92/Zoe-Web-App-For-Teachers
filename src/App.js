import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';
import Login from './components/Login';



function App() {
  return (
    <div>
     <Navbar />
    <Login />
    {/* <CodeDisplay /> */}
    <Footer />
    </div>
   
   
  );
}

export default App;
