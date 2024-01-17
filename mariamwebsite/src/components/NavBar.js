import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <div className='NavBar'>
             <p>
                    <Link  className="hover-bold"
                      to="/"
                      style={{ textDecoration: 'none', color: '#72bcd4' }}
                    >Home
                    </Link>
              </p>
             <p>
                    <Link  className="hover-bold"
                      to="/aboutme"
                      style={{ textDecoration: 'none', color: '#72bcd4'  }}
                    >About Me
                    </Link>
              </p>
             <p>
                    <Link  className="hover-bold"
                      to="/resume"
                      style={{ textDecoration: 'none', color: '#72bcd4' }}
                    >Resume
                    </Link>
              </p>
               <p>
                    <Link  className="hover-bold"
                      to="/projects"
                      style={{ textDecoration: 'none', color: '#72bcd4' }}
                    >Projects
                    </Link>
              </p>
              <p>
                    <Link  className="hover-bold"
                      to="/experience"
                      style={{ textDecoration: 'none', color: '#72bcd4' }}
                    >Experience
                    </Link>
              </p>
              <p>
                    <Link  className="hover-bold"
                      to="/contactme"
                      style={{ textDecoration: 'none', color: '#72bcd4' }}
                    >Contact Me
                    </Link>
              </p>
      </div>
    );
  }