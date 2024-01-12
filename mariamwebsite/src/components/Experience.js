import NavBar from './NavBar';
import './Experience.css';
import { Typography } from '@mui/material';
export default function Experience() {

    return (
     <div className="Intro">
        <NavBar></NavBar>
         <Typography variant='h2' mt={3} mb={2}>
            Experience
          </Typography>
          
     </div>
    );
}