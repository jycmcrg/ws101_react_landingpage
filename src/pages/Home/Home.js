import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home-content'>
        <h1>Welcome to WebDev</h1>
        <p>Dive into WebDev and unlock the magic of Information Technology — where every click, code, and creation brings 
          the digital world to life. Get inspired and shape the future with us!</p>
        <a href="/about" class="cta-button">Learn More</a>
      </div>
    </div>
  );
};

export default Home;