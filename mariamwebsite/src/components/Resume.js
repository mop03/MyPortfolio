import NavBar from './NavBar';
import './Resume.css';
export default function Resume() {

    return (
      <>
       <NavBar></NavBar>
        <iframe
        title="Resume"
        src="documents/Mariam_Masud_Resume_2024_final.pdf"
        style={{
          width: 'var(--width)',
          height: 'var(--height)',
        }}
        />

     </>
    );
}