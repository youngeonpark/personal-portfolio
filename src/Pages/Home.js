import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className='home-container'>

            <h1><a href={`${process.env.PUBLIC_URL}/Resume_Youngeon(Evelyn).pdf`} target="_blank" rel="noreferrer">portfolio</a></h1>
            <div className="portfolio-line"></div>
            <div className='child-container'>
                <Link to="/education" className='nav-el'>education</Link>
                <Link to="/projects" className='nav-el'>projects</Link>
                <Link to="/work-experience" className='nav-el'>work experience</Link>
            </div>
        </div>
    );
}