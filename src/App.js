import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';



function App() {
  return (
    <div>
     <Navbar />
    <CodeDisplay />
    <Footer />
    </div>
   
   
  );
}

export default App;
