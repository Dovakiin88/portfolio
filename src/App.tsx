import React from "react";
import { Box, Button } from "@mui/material";
import emailIcon from '../src/images/email-icom.png';
import Lin from '../src/images/linkedin.png'
import weirdcat from '../src/images/github.png'
import ai from '../src/images/AI 2_3.jpg';
import binary3 from '../src/images/binary3.png';
import Divider from "@mui/material/Divider";
import { relative } from "path";
import { grey } from "@mui/material/colors";
import { url } from "inspector";


function App() {
  return (
    <Box sx={{ backgroundImage: `url(${binary3})`, backgroundSize: 'cover', backgroundPosition: 'center center', width: '100vw', height: '100%' }}>
      <Box sx={{ width: '1210px', margin: 'auto' }}>
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
              Experienced Full-stack developer with a passion for turning ideas and dreams into reality through the use of technology.
            </Box>
          </Box>


          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "40%", position: 'absolute', left: '17%', opacity: '.5', fontSize: '20px' }}>
            Cybersecurity
          </Box>
          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "60%", position: 'absolute', left: '68%', opacity: '.5', fontSize: '20px' }}>
            Innovation
          </Box>
          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "40%", position: 'absolute', left: '72%', opacity: '.5', fontSize: '20px' }}>
            Artificial Intelligence
          </Box>
          <Box sx={{ fontFamily: 'monospace', color: 'Grey', top: "60%", position: 'absolute', left: '25%', opacity: '.5', fontSize: '20px' }}>
            Excellence
          </Box>
        </Box>

        <Box sx={{ width: '1100px', margin: 'auto' }}>
          <Divider sx={{ bgcolor: '#8c8c8c' }} variant="middle" />
        </Box>



        <Box sx={{ marginTop: '60px', background: 'rgba(0, 0, 0, 0.8)', width: '1130px' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row', width: '1100px', justifyContent: 'center', margin: 'auto', columnGap: '50px', border: '2mm ridge rgba(150,150,162,0.8)', backgroundColor: '#1c1c14', borderRadius: '10%', marginTop: '40px' }}>
            <Box sx={{ width: '40%', paddingTop: '20px' }}>
              <article>
                <p style={{ textAlign: 'justify', color: 'whitesmoke', fontFamily: 'monospace' }}>
                  <h3>Who am I?</h3>
                  I made a decision to pursue what i loved; Computers and artificial intelligence. How do they function, what's their composition, how do they communicate, and how do protect what i create?
                  This determination to change my destiny has lead my to a deeper discovery and exploration not only into my ability to create fully functional Full stack applications,
                  but has also awakened a drive to continue learning, improving and building.
                </p>
              </article>
            </Box>
            <Box sx={{ width: '40%', paddingTop: '20px' }}>
              <article>
                <p style={{ textAlign: 'justify', color: 'whitesmoke', fontFamily: 'monospace' }}>
                  <h3>Why me?</h3>
                  I specialize in 3 key areas that fuel the fires of innovation: Python full-stack development, Machine learning/Deep Learning and Cybersecurity. By combining these disciplines, I am equipped
                  to propel innovation forward to deliver the results that will be both profitable business and ecologically and societally sustainable.
                </p>
              </article>
            </Box>
          </Box>

          {/*Projects*/}
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '1100px', justifyContent: 'center', margin: 'auto', columnGap: '20px', border: '2mm ridge rgba(150,150,162,0.8)', backgroundColor: '#1c1c14', borderRadius: '10%', marginTop: '40px' }}>
            <h1 style={{ textAlign: 'center', color: '#bfbfbf', width: '10%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>Projects </h1>
            <Box>
              <Divider sx={{ bgcolor: '#8c8c8c', height: '130px' }} orientation="vertical" variant="middle" />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: '10px', width: '80%' }}>

              <Box sx={{ width: '40%', color: '#cccccc' }}>
                <h4 style={{ textAlign: 'center' }}>Alchemy Parlor</h4>
                This project was created to make keeping track of potions easier for players of skyrim.

                <Box sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '20px' }}>
                  <a href="https://alchemy-parlor.web.app/"> Alchemy Parlor Web Application</a>
                </Box>
              </Box>

              <Box sx={{ width: '40%', color: '#cccccc' }}>
                <h4 style={{ textAlign: 'center' }}>Template Builder</h4>
                NOTE: The code is available on Git Hub for this project. This was a project for a business.

                <Box sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '20px' }}>
                  <a href="https://github.com/Dovakiin88/Freelance-backend-for-Eventful-edge.git">Link to GitHub code for Template Builder</a>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', width: '1100px', justifyContent: 'center', margin: 'auto', columnGap: '10px', border: '2mm ridge rgba(150,150,162,0.8)', backgroundColor: '#1c1c14', borderRadius: '10%', marginTop: '40px' }}>
            <h1 style={{ textAlign: 'center', color: '#bfbfbf' }}>Relavent Experience</h1>
            <Box>
              <Divider sx={{ bgcolor: '#8c8c8c', height: '300px' }} orientation="vertical" variant="middle" />
            </Box>
            <Box>
              <Box>
                <article>
                  <p style={{ paddingRight: '15px', color: '#cccccc' }}>
                    <b>React web Developer</b> <br />
                    <i>Eventful Edge</i> <br />
                    <i>06/2023 - 09/2023</i> <br />
                    Designed and built full stack React web application that will allow users to create, review, edit and store newsletter templates for Property management company's Homeowners associations. <br />
                    Utilized Python web framework Flask to create API for user authentication access to the website as well as dta storage API for the template data.
                  </p>
                </article>
              </Box>
              <Box>
                <article>
                  <p style={{ paddingRight: '15px', color: '#cccccc' }}>
                    <b>Software Engineer Apprentice</b> <br />
                    <i>Coding Temple</i> <br />
                    <i>08/2022 - 03/2023</i> <br />
                    Engineered full-stack web application utilizing React front end and flask backend that allowed users to maintain a trackable list of vehicles. <br />
                    Utilized Python script to design a RESTful API to store, create, read, update and delete entries utilizing the backend flask app, into a PostgreSQL database. API connection tested via postman.

                  </p>
                </article>
              </Box>
            </Box>
          </Box>

          {/*skills section*/}
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '1100px', justifyContent: 'space-evenly', margin: 'auto', columnGap: '10px', border: '2mm ridge rgba(150,150,162,0.8)', backgroundColor: '#1c1c14', borderRadius: '10%', marginTop: '40px' }}>
            <Box sx={{ textAlign: 'center', margin: '10px', color: '#bfbfbf', width: '12%', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingLeft: '20px' }}>
              <h1 style={{ marginRight: '10px' }}>Technologies</h1>
            </Box>
            <Box>
              <Divider sx={{ bgcolor: '#8c8c8c', height: '150px' }} orientation="vertical" variant="middle" />
            </Box>

            {/*Techology box */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '80%' }}>
              {/*Tech specialties 1 */}
              <Box sx={{ textAlign: 'center', paddingBottom: '15px', alignItems: 'center', justifyContent: 'center', color: '#cccccc' }}>
                <h3>Data Analysis</h3>
                <Box >
                  Tensorflow
                </Box>
                <Box>
                  Scikit Learn
                </Box>
                <Box>
                  Keras
                </Box>
                <Box>
                  Numpy
                </Box>
                <Box>
                  Pandas
                </Box>
              </Box>

              {/*Tech specialties 2 */}
              <Box sx={{ textAlign: 'center', paddingBottom: '15px', alignItems: 'center', color: '#cccccc' }}>
                <h3>Databases</h3>
                <Box>
                  SQL
                </Box>
                <Box>
                  NoSQL
                </Box>
                <Box>
                  Postgre SQL
                </Box>
                <Box>
                  Azure
                </Box>
                <Box>
                  AWS
                </Box>
              </Box>

              {/*Tech specialties 3 */}
              <Box sx={{ textAlign: 'center', paddingBottom: '15px', alignItems: 'center', color: '#cccccc' }}>
                <h3>Software Engineering</h3>
                <Box>
                  Machine Learning
                </Box>
                <Box>
                  Object Oriented Proframming
                </Box>
                <Box>
                  Python
                </Box>
                <Box>
                  Java
                </Box>
              </Box>

              {/*Tech specialties 4 */}
              <Box sx={{ textAlign: 'center', paddingBottom: '15px', alignItems: 'center', color: '#cccccc' }}>
                <h3>Web Development</h3>
                <Box>
                  JavaScript/Typescript
                </Box>
                <Box>
                  React.js
                </Box>
                <Box>
                  HTML5/CSS
                </Box>
                <Box>
                  Node.js
                </Box>
                <Box>
                  Flask
                </Box>
              </Box>
            </Box>

          </Box>

          {/*Certifications */}
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '1100px', justifyContent: 'center', margin: 'auto', border: '2mm ridge rgba(150,150,162,0.8)', backgroundColor: '#1c1c14', borderRadius: '10%', marginTop: '40px' }}>
            <Box sx={{ width: '12%', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
              <h2 style={{ color: '#bfbfbf', paddingRight: '80px' }}>Certifications</h2>
            </Box>
            <Box>
              <Divider sx={{ bgcolor: '#8c8c8c', height: '150px' }} orientation="vertical" variant="middle" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: 'row', columnGap: '30px', textAlign: 'center', alignItems: 'center', justifyContent: "center", color: '#cccccc', width: '75%', margin: '50' }}>

              <Box sx={{ textAlign: "center" }}>
                KPMG AU Data Analyst Job Simulation (2023)
              </Box>
              <Box sx={{ textAlign: "center" }}>
                Certified Software Engineer (2023)
              </Box>

            </Box>

          </Box>
        </Box>
        {/* What i do for fun section */}
        <Box>

        </Box>

        {/* contact me section*/}
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '1130px', justifyContent: 'center', margin: 'auto', background: 'rgba(0, 0, 0, 0.8)', alignContent: 'center' }}>
          <h2 style={{ color: '#cccccc', textAlign: 'center', marginTop: '60px' }}>Contact Me</h2>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
            <a href="mailto:ashlyvand1@gmail.com">
              <Button>
                <img src={emailIcon} style={{ height: '30px' }} alt="" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/ashley-andrews-software-engineer-873666238/">
              <Button>
                <img src={Lin} style={{ height: '30px' }} alt="" />
              </Button>
            </a>
            <a href="https://github.com/Dovakiin88?tab=repositories">
              <Button>
                <img src={weirdcat} style={{ height: '30px' }} alt="" />
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
{/*
  border: '2mm ridge rgba(150,150,162,0.8)', backgroundColor: 'rgba(35,35,40,0.8)', borderRadius: '25px' 
  Initial background color for sections: rgba(35,35,40,0.8) 

*/}