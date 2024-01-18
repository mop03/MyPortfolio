import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import { Link } from '@mui/material';
import styled from '@emotion/styled';

export default function NavBar() {
   const navItems =
    window.innerWidth > 425
      ? [
          { to: '/', name: 'HOME' },
          { to: '/aboutme', name: 'ABOUT ME' },
          { to: '/resume', name: 'RESUME' },
           { to: '/projects', name: 'PROJECTS' },
          { to: '/experience', name: 'EXPERIENCE' },
          { to: '/contactme', name: 'CONTACT' },
        ]
      : [
          { to: '/', name: 'HOME' },
          { to: '/experience', name: 'EXPERIENCE' },
          { to: '/projects', name: 'PROJECTS' },
        ];

      const currPage = '/' + window.location.href.split('/')[window.location.href.split('/').length - 1];

      const NavLink = styled(Link)(({ theme }) => ({
        fontSize: '1rem',
        color: '#72bcd4',
        textDecoration: 'none',
        zIndex: 2,
        }));

    return (
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        height: '5rem',
      }}
      alignItems={'center'}
    >
      <NavLink href={navItems[0].to}>{navItems[0].name}</NavLink>
      {navItems.slice(1).map((navItem) => {
        return (
          <Fragment key={navItem.to}>
            <hr
              style={{
                width: window.innerWidth > 425 ? '3rem' : '1.5rem',
                border: 'none',
                borderTop: '1px solid #a0a0a0',
                margin: '8px 0',
              }}
            />
            <NavLink
              sx={navItem.to === currPage ? { color: "#0991bd !important" ,fontWeight: "bold" } : {}}
              href={navItem.to}
            >
              {navItem.name}
            </NavLink>
          </Fragment>
        );
      })}
    </Box>
      // <div className='NavBar'>
      //        <p>
      //               <Link  className="hover-bold"
      //                 to="/"
      //                 style={{ textDecoration: 'none', color: '#72bcd4' }}
      //               >Home
      //               </Link>
      //         </p>
      //        <p>
      //               <Link  className="hover-bold"
      //                 to="/aboutme"
      //                 style={{ textDecoration: 'none', color: '#72bcd4'  }}
      //               >About Me
      //               </Link>
      //         </p>
      //        <p>
      //               <Link  className="hover-bold"
      //                 to="/resume"
      //                 style={{ textDecoration: 'none', color: '#72bcd4' }}
      //               >Resume
      //               </Link>
      //         </p>
      //          <p>
      //               <Link  className="hover-bold"
      //                 to="/projects"
      //                 style={{ textDecoration: 'none', color: '#72bcd4' }}
      //               >Projects
      //               </Link>
      //         </p>
      //         <p>
      //               <Link  className="hover-bold"
      //                 to="/experience"
      //                 style={{ textDecoration: 'none', color: '#72bcd4' }}
      //               >Experience
      //               </Link>
      //         </p>
      //         <p>
      //               <Link  className="hover-bold"
      //                 to="/contactme"
      //                 style={{ textDecoration: 'none', color: '#72bcd4' }}
      //               >Contact Me
      //               </Link>
      //         </p>
      // </div>
    );
  }