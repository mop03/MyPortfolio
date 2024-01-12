import React from "react";
import { Link } from 'react-router-dom';
import './Intro.css';
import Typewriters from "./Typewriter";
import { useState, useNavigate } from "react";
import NavBar from "./NavBar";

export default function Intro() {
    const [isShown, setIsShown] = useState(false);
    return (
      <div className="Intro">
            <Typewriters></Typewriters>
            <div className="circle_border">
            <Link to='/aboutme'>
            <img 
            src="images/2024headshot_square.jpg" 
            alt="Headshot" 
            onMouseOver={() => setIsShown(true)}
            onMouseOut={() => setIsShown(false)}
            /> 
            </Link>
           </div>
           {isShown && <p  style={{ 
              fontSize:'15px',
              position: 'absolute', 
              top: '20%', left: '55%', 
              marginLeft: '30px', 
              backgroundColor: '#FFC0CB', 
              padding: '10px', 
              borderRadius: '10px', 
              zIndex: 1 }}> hint: click on my face to learn more about me :D</p>}
            <div className="mini_circle_border_resume">
                  <p>
                    <Link className="hover-bold"
                      to="/resume"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >Resume
                    </Link>
                  </p>
            </div>
            <div className="mini_circle_border_projects">
                  <p>
                    <Link className="hover-bold"
                      to="/projects"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >Projects
                    </Link>
                  </p>
            </div>
             <div className="mini_circle_border_contact">
                  <p>
                    <Link className="hover-bold"
                      to="/contactme"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >Contact Me
                    </Link>
                  </p>
              </div>
               <div className="mini_circle_border_experience">
                  <p>
                    <Link className="hover-bold"
                      to="/experience"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >Experience
                    </Link>
                  </p>
              </div>
      </div>
    );
  }