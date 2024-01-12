import NavBar from './NavBar';
import './AboutMe.css';
import { Typography, Container, Box } from '@mui/material';
export default function AboutMe() {

    return (
     <>
        <NavBar></NavBar>
        <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          <Box
            component='img'
            src='images/2024headshot_square.jpg'
            alt='Headshot'
            className='my-picture'
            sx={{
              marginTop: '3%',
              borderRadius: '100%',
              width: 'calc(min(90vw, 400px))',
              height: 'calc(min(90vw, 400px))',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
          />
          <Typography variant='h4' mt={3}>
            Mariam Masud
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
            }}
          >
            Blah...
          </Typography>

          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              fontWeight: 'bold',
              textAlign: 'justify',
            }}
          >
            I am currently seeking new grad Software Engineering roles, don't
            hesitate to reach out!
          </Typography>
        </Box>
      </Container>
     </>
    );
}