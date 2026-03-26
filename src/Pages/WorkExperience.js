import React from 'react';
import './WorkExperience.css';

export default function WorkExperience() {
    return(
        <div className='workexperience-container'>
            <div className='highskl-container'>
                <div className="info">
                    <p > 
                        <b>Coding Club </b>| Founder, Instructor
                        <br />March 2022 - June 2023 
                    </p>
                    <p className='content'>
                        Taught 13 students how to code in Python with the emphasis on getting them more involved and interested 
                        in this field——lectured some introductory topics, taught how to fix bugs 1-on-1, met during weekends 
                        through video calls during weekends, uploaded small projects every week
                    </p>
                </div>
                <div className="info">
                    <p > 
                        <b>Church Kindergarten </b>| Teacher Assistant
                        <br />October 2019 - May 2023 
                    </p>
                    <p className='content'>
                        Helped teachers organize weekly materials and navigate through technological difficulties and
                        developed connections with 8 children younger than 7 years old by teaching them the Korean language 
                        to instill confidence in speaking and writing in a foreign country
                    </p>
                </div>
            </div>

            
            <div className="college-container">
                <div className="info">
                    <p > 
                        <b>CVM-Enterprises, LLC </b>| UI/UX & Front-End Developer Intern
                        <br />June 2025 - December 2025
                    </p>
                    <p className='content'>
                        Developed and maintained front-end architecture for digital platforms supporting reentry and wellness initiatives using React, HTML, CSS, and JavaScript, optimizing accessibility and performance
                        <br /> Led UI/UX design in Figma, supervising team members’ design contributions and translating wireframes into interactive React components
                    </p>
                </div>
            </div>

            <div className="college-container" id="edr">
                <div className="info">
                    <p > 
                        <b>Educational Division Reform </b>| Classroom Coordinator
                        <br /> June 2025 - July 2025
                    </p>
                    <p className='content'>
                        Coordinated classroom activities, mentoring 6th-grade and high school students, maintaining structured learning environments for 219 service hours
                        <br />Received a mayoral recognition award from Brockton for community service excellence
                    </p>
                </div>
            </div>
        </div>
    );
}