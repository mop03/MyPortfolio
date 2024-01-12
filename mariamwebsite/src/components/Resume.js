import NavBar from './NavBar';
import './Resume.css';
import { Typography } from '@mui/material';
export default function Resume() {

    return (
     <div className="Intro">
        <NavBar></NavBar>
         <Typography variant='h2' mt={3} mb={2}>
            Resume
          </Typography>
        <iframe
        title="Resume"
        src="documents/Mariam_Masud_Resume_2024_final.pdf"
        width="90%"
        height="700px"
        />
     </div>
    );
}