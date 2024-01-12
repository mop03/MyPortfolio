import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ContactMe.css';
import NavBar from './NavBar';
import { Box, Container, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import styled from '@emotion/styled';

export default function ContactMe() {
  const ContactLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
  }));

  return (
    <>
      <NavBar />
      <Container sx={{ textAlign: 'center'}}>
        <Typography variant='h2' mt={3}>
          Let's Connect!
        </Typography>
        <Box className='enlarge-on-hover'>
          <ContactLink href='mailto:mariamomasud@gmail.com'>
            <Typography variant='h5' mt={3} color={'#FFC0CB'}>
              <EmailIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;mariamomasud@gmail.com
            </Typography>
          </ContactLink>
        </Box>
        <Box className='enlarge-on-hover'>
          <ContactLink
            href='https://www.linkedin.com/in/mariam-masud/'
            target='_blank'
          >
            <Typography variant='h5' mt={3} color={'#FFC0CB'}>
              <LinkedInIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;mariam-masud
            </Typography>
          </ContactLink>
        </Box>
        <Box className='enlarge-on-hover'>
          <ContactLink href='https://github.com/mop03' target='_blank'>
            <Typography variant='h5' mt={3} color={'#FFC0CB'}>
              <GitHubIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;mop03
            </Typography>
          </ContactLink>
        </Box>
        <Box className='enlarge-on-hover'>
          <ContactLink>
            <Typography variant='h5' mt={3} color={'#FFC0CB'}>
              <PhoneEnabledIcon sx={{ position: 'relative', top: '0.3rem' }} />
              &nbsp;(714) 323-8663
            </Typography>
          </ContactLink>
        </Box>
      </Container>
    </>
  );
}

