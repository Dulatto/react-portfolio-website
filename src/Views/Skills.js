import React from 'react';
import SkillBar from 'react-skillbars';


const skills = [
    { type: "Java", level: 85 },
    { type: "Javascript", level: 75 },
];
const colors = {
    "bar": "#3498db",
    "title": {
        "text": "#fff",
        "background": "#2980b9"
    }
}

const Skills = () => {
    return (
        <div className='skills-style'>
            <div className='row'>
                <div className='col-md-6 '>
                    <div className='skills-cont'>
                        <div className='my-5'>&nbsp;</div>
                        <h1 className='mt-5 ms-4'>
                            <span className='hvr-wobble-vertical'>S</span>
                            <span className='hvr-wobble-vertical'>k</span>
                            <span className='hvr-wobble-vertical'>i</span>
                            <span className='hvr-wobble-vertical'>l</span>
                            <span className='hvr-wobble-vertical'>l</span>
                            <span className='hvr-wobble-vertical'>s</span>
                            <br />  <span className='hvr-wobble-vertical'>&</span>    <span className='hvr-wobble-vertical'>E</span>
                            <span className='hvr-wobble-vertical'>x</span>
                            <span className='hvr-wobble-vertical'>p</span>
                            <span className='hvr-wobble-vertical'>e</span>
                            <span className='hvr-wobble-vertical'>r</span>
                            <span className='hvr-wobble-vertical'>i</span>
                            <span className='hvr-wobble-vertical'>e</span>
                            <span className='hvr-wobble-vertical'>n</span>
                            <span className='hvr-wobble-vertical'>c</span>
                            <span className='hvr-wobble-vertical'>e</span></h1>
                        <p className='my-5 ms-4'>Since beginning my journey as a freelance developer nearly 10 years ago,
                            I’ve done remote work for agencies, consulted for startups, and collaborated with talented people
                            to create web products for both business and consumer use.</p>
                        <p className='my-5 ms-4'>I create successful responsive websites that are fast, easy to use, and built with best practices.
                            The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps,
                            custom plugins, features, animations, and coding interactive layouts.</p>
                        <p className='my-5 ms-4'>Visit my <a href="https://www.linkedin.com/in/dulat-omarov/" target="_blank">LinkedIn </a>profile for more details or just <a href="http://localhost:3001/contact" >contact </a>me.</p>
                    </div>
                </div>
                <div className='col-md-6 m'>
                    <div className='my-5'>&nbsp;</div>
                    <SkillBar skills={skills} animationDuration={7000} colors={colors} />
                </div>


            </div>
        </div>
    );
};

export default Skills;