import { Box, Container, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useRef } from 'react';
import './Projects.css';
import NavBar from './NavBar';

function Projects() {
  const fadeInDivs = useRef([]);

  const handleScroll = (intersections) => {
    fadeInDivs.current.forEach((div) => {
      if (
        div.getBoundingClientRect().top >=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        div.classList.remove('visible');
      } else {
        div.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    setTimeout(() => {
      handleScroll();
    }, 100);
    fadeInDivs.current = document.querySelectorAll('.fade-in');

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <NavBar />
    <Container>
      <Grid container spacing={1} pb={3}>
        {projects.map(({ img, title, skills, bullets }) => (
          <Fragment key={title}>
            <Grid
              item
              xs={12}
              sm={5}
              mb={1}
              sx={{ textAlign: { xs: 'center', sm: 'right' } }}
              className='fade-in'
            >
              <Box
                sx={{
                  aspectRatio: '1 / 1',
                  maxWidth: { xs: 'none', sm: '325px' },
                  maxHeight: { xs: 'none', sm: '325px' },
                  display: 'flex',
                  paddingLeft: { xs: '0', sm: 'calc(100% - 325px)' },
                }}
              >
                <Box
                  component='img'
                  sx={{
                    height: 'auto',
                    width: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#ffffff',
                  }}
                  src={img}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              className='fade-in'
              sx={{ paddingTop: { xs: '5px !important', sm: 'auto' } }}
            >
              <Typography sx={{ display: 'flex', justifyContent: 'left'}} mt={{ xs: '0', sm: '30px' }} mb={1} paddingLeft={2} variant='h4'>
                {title}
              </Typography>
              <Typography sx={{ display: 'flex', justifyContent: 'left'}} variant='body1' mb={1} paddingLeft={2} color='#808080'>
                {skills}
              </Typography>
              <ul style={{textAlign:'justify'}}>
                {bullets.map((bullet) => (
                  <li key={bullet}>
                    <Typography variant='body1' mb={1}>
                      {bullet.startsWith('%link%') ? (
                        <a
                          href={bullet.split('%link%')[1]}
                          rel='noreferrer'
                          style={{ color: 'white' }}
                          target='_blank'
                        >
                          {bullet.split('%link%')[1]}
                        </a>
                      ) : (
                        bullet
                      )}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
    </>
  );
}

const projects = [
  {
    img: 'images/walkppl.png',
    title: 'WalkPeople',
    skills: 'React.js, Node.js, Express.js, CSS, JavaScript, Firebase/Firestore',
    bullets: [
      'Collaborated with 4 peers to create a music-listening web app simulating the experience of using a Walkman',
      'Enables users to search, listen, and download songs to their device. Supports custom playlist creation and sorting playlists based on 4 preset categories. Leveraged React and Firebase for CRUD operations on song database',
    ],
  },
  {
    img: 'images/socalmist.png',
    title: 'SoCalMIST Website',
    skills: 'React.js, Node.js, Express.js, CSS, JavaScript',
    bullets: [
        'Collaborated with 3 peers to improve and recreate the SoCalMIST website',
        'Informs users of what SoCalMIST is and how to get involved',
    ]
  },
  {
    img: 'images/qt.png',
    title: 'Bulk Club List Database',
    skills: 'Qt, SQL, C++',
    bullets: [
       'An app that allows a grocery store/warehouse view what has been bought by customers with ids, view and alter their inventory and product list, revenue, and info about their members (whether they are Executive or Regular, their purchases and totals).',
       'GUI created with Qt, database creation and manipulation with SQL, and source code in C++.',
    ]

  }

];

export default Projects;
