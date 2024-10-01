import React from 'react';
import './About.css';
import frontEndImage from './frontEnd.png';
import backEndImage from './backend.png';
import fullStackImage from './fullStack.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div class="about-content">
        <h1>About</h1>
        <p><b>Web development</b> is the process of creating, designing, and maintaining websites and web applications. It involves writing code and managing 
          various aspects of a website's functionality, user experience, and overall performance.</p>
        <h2>Why Web Development is Important?</h2>
        <ul>
          <li>Establishes an Online Presence</li>
          <li>Enhances User Experience</li>
          <li>Supports Business Growth</li>
          <li>Ensures Security and Compliance</li>
        </ul>
        <h2>Key Components of Web Development</h2>
        <div class="abouts">
          <div class="about-card">
            <figure><img src={frontEndImage} alt="Front-End Development"/></figure>
              <h3>Front-End Development</h3>
              <p>This involves designing and coding the parts of a website that users interact with directly, including layout, visual elements, and user 
                experience (UX).</p>
              <p><b>Key Technologies: HTML, CSS, JavaScript, frameworks like React, Angular, or Vue.js.</b></p>
          </div>
          <div class="about-card">
            <figure><img src={backEndImage} alt="Back-End Development"/></figure>
            <h3>Back-End Development</h3>
            <p>This involves working on the server-side of web applications, handling databases, server logic, and application integration. </p>
            <p><b>Key Technologies: Server-side languages (e.g., Python, Ruby, PHP, Node.js), databases (e.g., MySQL, MongoDB), and frameworks 
                (e.g., Django, Ruby on Rails, Express.js).</b></p>
          </div>
          <div class="about-card">
            <figure><img src={fullStackImage} alt="Full Stack Development"/></figure>
              <h3>Full Stack Development</h3>
              <p>A combination of both front-end and back-end development, full-stack developers have the skills to build entire web applications from 
                start to finish.</p>
              <p><b>Key Technologies: A combination of front-end and back-end technologies, depending on the project.</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

