import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import './styles/global.css';
import Layout from './components/common/Layout';

function App() {
  return (
    <Layout>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
        {/* <Route component={NotFound} /> */}
        
      </Routes>
    </HashRouter>
    </Layout>
  );
}

export default App;
