import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import WorkExperience from './Pages/WorkExperience';
import LandingPage from './Pages/LandingPage';
import Header from './Layout/Header';
import RoomElement from './Layout/RoomElement';
import reportWebVitals from './reportWebVitals';


function HeaderLayout() {
  return (
    <>
      <RoomElement />
      <Header />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route element={<HeaderLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work-experience" element={<WorkExperience />} />
          </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();