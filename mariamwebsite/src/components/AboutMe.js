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
            src='images/grad_headshot2024.png'
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
            I am a graduating senior studying Computer Science at UCLA. I first found interest in the field of computer science 
            back in middle school on Khan Academy and my interest grew further in high school when I joined the amazing community
            of Girls Who Code. I've gained a lot of hands on software development experience within college clubs such as Society of Women Engineers (SWE)
            and in past industry internships. I love the idea that I can positively impact the world around me by contributing my knowledge and skill within
            computer science. I look forward to finding purposeful application of my skills in the next steps of my career.        
            {/* Outside of my time coding, I like to stay active and workout: my current fitness goals are to do a pull up
            and run a marathon.  */}
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