import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Backend programer passionate with tecnologie and practical
              solutions Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Unde magnam, iure atque voluptas aperiam architecto eum esse
              beatae placeat modi?
            </p>
            <p>
              I'm really compromise with upgarde my habilities at least 1% daily
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>React.JS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>C#</p>
              <hr style={{ width: '100%' }} />
            </div>
            <div className="about-skill">
              <p>.NET</p>
              <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROYECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
