import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './styles/global.css';
import Layout from './components/common/Layout';
import { ThemeProvider } from './components/common/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
            {/* <Route component={NotFound} /> */}

          </Routes>
        </HashRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
