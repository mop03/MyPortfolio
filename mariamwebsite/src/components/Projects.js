import './Projects.css';
import NavBar from './NavBar';
import { Typography } from '@mui/material';
export default function Projects() {

    return (
     <div className="Intro">
         <NavBar></NavBar>
          <Typography variant='h2' mt={3} mb={2}>
            Projects
          </Typography>
     </div>
    );
}