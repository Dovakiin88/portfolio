import React from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Button } from "@mui/material";
import emailIcon from '../src/images/email-icom.png';
import Lin from '../src/images/linkedin.png'
import weirdcat from '../src/images/github.png'
import ai from '../src/images/AI 2_3.jpg';
import binary3 from '../src/images/binary3.png';
import Divider from "@mui/material/Divider";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';



function App() {

  const isMobile = useMediaQuery({ maxWidth: 767})

  return (
    <Box sx={{ backgroundImage: `url(${binary3})`, backgroundSize: 'cover', backgroundPosition: 'center center', width: '100%', height: '100%' }}>
      
      <Box sx={{ width: '1210px', margin: 'auto', display: "flex", flexDirection: isMobile ? 'column' : 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'black' }}>
          <div>
            <a href="https://www.linkedin.com/in/ashley-andrews-software-engineer-873666238/">LinkedIn</a>
          </div>

          <div>
            <a href="mailto:ashlyvand1@gmail.com">Email</a>
          </div>

          <div>
            <a href="https://github.com/Dovakiin88?tab=repositories">Git Hub</a>
          </div>

        </Box>
        <Box sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: "column", backgroundColor: 'black' }}>

          <Box sx={{ backgroundColor: 'black', justifyContent: 'center' }}>
            <img src={ai} style={{ height: '800px', zIndex: '-1' }} alt="" />
          </Box>

          <Box sx={{ color: 'white', fontSize: '75px', fontFamily: 'courier', margin: 'auto', justifyContent: 'center', alignItems: 'center', width: '1100px', textAlign: 'center' }}>
            Ashley Andrews
            <Box sx={{ fontSize: '15px', fontFamily: 'monospace', justifyContent: 'center' }}>
              <Button component={Link} to='/bio'> Enter</Button>
              Welcome to my Profile page.
            </Box>
          </Box>


          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "40%", position: 'absolute', left: '14%', opacity: '.5', fontSize: '20px' }}>
            Cybersecurity
          </Box>
          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "60%", position: 'absolute', left: '69%', opacity: '.5', fontSize: '20px' }}>
            Innovation
          </Box>
          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "40%", position: 'absolute', left: '72%', opacity: '.5', fontSize: '20px' }}>
            Artificial Intelligence
          </Box>
          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "60%", position: 'absolute', left: '22%', opacity: '.5', fontSize: '20px' }}>
            Excellence
          </Box>
        </Box>

        <Box sx={{ width: '1100px', margin: 'auto' }}>
          <Divider sx={{ bgcolor: '#8c8c8c' }} variant="middle" />
        </Box>

        
      </Box>
    </Box>
  );
}

export default App;
