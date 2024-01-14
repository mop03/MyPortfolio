import { Box, Container, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useRef } from 'react';
import './Projects.css';
import NavBar from './NavBar';
import './Experience.css';


function Experience() {
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
        {experiences.map(({ img, title, position, duration, bullets }) => (
          <Fragment key={duration}>
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
                    backgroundColor: 'white',
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
              <Typography  sx={{ display: 'flex', justifyContent: 'left'}} mt={{ xs: '0', sm: '30px' }} mb={1} paddingLeft={2} variant='h4'>
                {title}
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'left', gap: '0.8rem' }}
              >
                <Typography variant='body1' mb={1} paddingLeft={2} color='#808080'>
                  {position}
                </Typography>
                <hr
                  style={{
                    width: '1rem',
                    border: 'none',
                    borderTop: '1px solid #a0a0a0',
                    margin: '10px 0',
                  
                  }}
                />
                <Typography variant='body1' color='#808080'>
                  {duration}
                </Typography>
              </Box>
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

const experiences = [
  {
    img: 'images/logoamazon.png',
    title: 'Amazon Air',
    position: 'Software Development Engineer Intern',
    duration: 'Jun 2023 - Sep 2023',
    bullets: [
      'Devised Input Parameters for WorkFlow Orchestrator (WFO) forecasting tool allowing scientists to input data into workflows via both input parameters and existing option of input files',
      'Researched and developed in-depth design document and led team design review for feedback',
      'Refactored existing AWS Lambda-backed APIs, DynamoDB tables, and inputs to StepFunctions',
      'Introduced comprehensive input validation to bolster robustness and strengthen security',
      'Collaborated directly with research clients. Addressed clients’ pain points by integrating new forecasting tool',
      'Oversaw complete feature lifecycle through to production. Conducted thorough unit/integration testing to maintain CI/CD pipeline health',
    ],
  },
  {
    img: 'images/sweucla.png' ,
    title: 'Society of Women Engineers at UCLA',
    position: 'Web Dev Committee',
    duration: 'Dec 2021 – Jun 2023',
    bullets: [
      'Worked alongside 3 SWE developers. Improved responsiveness and streamlined UX via Bootstrap',
      'Designed and implemented UI for internal SWE Glassdoor concept, connecting UCLA SWE members to academic and professional resources',
      'Mentored incoming members. Maintained thorough documentation and oversaw technical onboarding',
    ],
  },
  {
    img: 'images/logoamazon.png',
    title: 'Amazon Air',
    position: 'Software Development Engineer Intern',
    duration: 'Jun 2022 - Sep 2022',
    bullets: [
      'Introduced Data Load Job feature to automate and standardize process for scientists to upload various file types onto WFO forecasting models',
      'Triggered Data Load task by building an AWS Lambda job to transport data from external to internal S3 buckets via Lambda-backed APIs',
      'Architected DynamoDB table via CloudFormation as a mechanism to track Data Load Job status',
    ],
  },
  {
    img: 'images/knextech_logo.jpeg',
    title: 'Knex Technology',
    position: 'Data Science Intern',
    duration: 'Aug 2020 – Oct 2020',
    bullets: [
      'Created custom data tables by extracting information from Oracle’s databases through SQL queries',
      'Leveraged BI-Publisher to build analytical reports used by client companies to visualize various company operations',
    ],
  },
  {
    img: 'images/NCAS.png',
    title: 'NASA Community College Aerospace Scholars (NCAS) Program',
    position: 'NASA Aerospace Scholar',
    duration: 'May 2020 – July 2020',
    bullets: [
      'Developed mock space flight mission to Mars with team of peers and NASA advisor. Won best mission due to depths of research',
      'Spearheaded team’s Gantt Chart mission timeline. Coordinated and communicated critical information between sub-teams about engineering operations. Propelled team productivity with proposal of next steps and guiding questions',
    ],
  },
   {
    img: 'images/cubesat.jpeg',
    title: 'CubeSat',
    position: 'Radio Hardware Team',
    duration: 'Sep 2017 – Jun 2019',
    bullets: [
     'A program within the Irvine Unified School District where recruited high school students work to build and launch satellites',
     'Helped in production of cube satellite Irvine03',
     'Worked mainly on radio hardware: HDSDR (software defined radio), arrow antenna to capture satellite signals',
     'Developed Orbital Debris Assessment Report for Irvine03 using NASA’s Debris Assessment Software', 
     'Toured Rocket Lab - our satellite’s launcher',
    ],
  },
];
export default Experience;