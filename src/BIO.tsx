import { Box, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import pic from './images/pic.jpg';
import Grid from '@mui/material/Grid';

export default function BIO() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black' }}>
      <Box sx={{ flexGrow: 1, maxWidth: '150px', paddingRight: '50px', marginTop: '20px' }}>
        <Navbar />
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <div style={{ margin: '10px' }}>
              <img src={pic} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <div style={{ color: 'white', margin: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '45px', md: '60px', lg: '80px', fontFamily: 'monospace' } }}>
                  Ashley Andrews
                </Typography>
                <Typography>
                  <article style={{ margin: '40px' }}>
                    <p style={{ textAlign: 'justify', }}>
                      <span style={{ display: 'inline-block', marginLeft: '2em', marginRight: '1em' }}>&nbsp;</span>
                      Hello and welcome to my profile page. I am a Software engineer and a budding Cybersecurity expert. For almost 8 years, I have
                      worked in the insurance industry in multiple adjuster positions. Eventually, I made a decision to pursue what I loved; Computers and artificial intelligence.
                      I begin exploring how computers function, how they communicate, how to build and protect them. I built my first gaming computer and in its day it was a beast!
                      The next task was how to i "talk" to my computer? how do i speak its language?
                    </p>
                    <p style={{ textAlign: 'justify', }}>
                      <span style={{ display: 'inline-block', marginLeft: '2em', marginRight: '1em' }}>&nbsp;</span>
                      For about 8 years, i have worked in the insurance industry as a claims adjuster; Particurlarly Total loss, auto liability, bodily injury, commercial and emergency
                      property claims. I also have experience engaging with and presenting to corporate and legal entities on behalf of consumers. I have extensive experience in negotiation, writing and analyzing reports and comminucation; Now while it
                      pertained to total loss and bodily injury settlements, it still honed my ability to acheive mutual agreements with others. I have a Masters degree in business administration
                      with a concentration in finance therefore i have a glimpse into both the consumer and business side.
                    </p>
                  </article>

                  <article style={{ margin: '40px' }}>
                    <p style={{ textAlign: 'justify', }}>
                      <span style={{ display: 'inline-block', marginLeft: '2em', marginRight: '1em' }}>&nbsp;</span>
                      I am currrenty attending Purdue Global to pursue my masters in Information Technology with a concentration in cyber security.
                      While I specialize in software engineering, I also have experience in Data Analysis, and junior level penetration testing.
                      While i may not have the number years of experience required for any one position, I am more than able to learn adapt and perform. I have a 4.0 in my masters programs 
                      which strongly recommended that students have a minimum of 5 years IT experience for success. I had no prior IT experience. I was able to keep up with a bootcamp having zero web development experience or
                      prior knowledge.  
                    </p>
                  </article>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <Box>
          <h2 style= {{ textAlign: 'center', fontFamily: 'monospace', color: 'white', fontSize: '50px', marginTop: '80px', marginBottom: '10px' }}>Highlighted Projects</h2>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

              <Box sx={{ color: '#cccccc', fontFamily: 'monospace', fontSize: '18px' }}>
                <h4 style={{ textAlign: 'center' }}>Alchemy Parlor</h4>
                This project was created to make keeping track of potions easier for players of skyrim.

                <Box sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '20px', fontFamily: 'monospace', fontSize: '18px' }}>
                  <a href="https://alchemy-parlor.web.app/"> Alchemy Parlor Web Application</a>
                </Box>
              </Box>

              <Box sx={{ width: '40%', color: '#cccccc', fontFamily: 'monospace', fontSize: '18px' }}>
                <h4 style={{ textAlign: 'center' }}>Template Builder</h4>
                NOTE: The code is available on Git Hub for this project. This was a project for a business.

                <Box sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '20px', fontFamily: 'monospace', fontSize: '18px' }}>
                  <a href="https://github.com/Dovakiin88/Freelance-backend-for-Eventful-edge.git">Link to GitHub code for Template Builder</a>
                </Box>
              </Box>
            </Box>
        </Box>

        <Box>
          <h2 style= {{ textAlign: 'center', fontFamily: 'monospace', color: 'white', fontSize: '50px', marginTop: '80px', marginBottom: '10px' }}>Resume</h2>
          <Box>
              <Box sx={{ margi: '20px' }}>
                <article>
                  <p style={{ paddingRight: '15px', color: '#cccccc', textAlign: 'center', marginBottom: '6px'}}>
                    <b style={{ textAlign: 'center' }}>React web Developer</b> <br />
                    <i>Eventful Edge</i> <br />
                    <i>06/2023 - 09/2023</i> <br />
                  </p>
                    
                  <p style={{ textAlign: 'justify', color: 'white', maxWidth: '1000px', margin: 'auto' }}>
                    <Box sx={{ margin: '8px' }}>
                      Designed and built full stack React web application that will allow users to create, review, edit and store newsletter templates for Property management company's Homeowners associations.
                    </Box>

                    <Box sx={{ margin: '8px' }}>
                    Utilized Python web framework Flask to create API for user authentication access to the website as well as dta storage API for the template data.
                    </Box>
                  </p>
                </article>
              </Box>
              <Box sx={{ marginTop: '40px' }}>
                <article>
                  <p style={{ paddingRight: '15px', color: '#cccccc', textAlign: 'center', marginBottom: '6px' }}>
                    <b style={{ textAlign: 'center' }}>Software Engineer Bootcamp Training</b> <br />
                    <i>Coding Temple</i> <br />
                    <i>08/2022 - 03/2023</i> <br />
                  </p>

                  <p style={{ textAlign: 'justify', color: 'white', maxWidth: '1000px', margin: 'auto'}}>
                    <Box sx={{ margin: '8px' }}>
                      Engineered full-stack web application utilizing React front end and flask backend that allowed users to maintain a trackable list of vehicles.
                    </Box>
                    <Box sx={{ margin: '8px' }}>
                      Utilized Python script to design a RESTful API to store, create, read, update and delete entries utilizing the backend flask app, into a PostgreSQL database. API connection tested via postman
                    </Box>
                  </p>
                </article>
              </Box>
          </Box>
          <h2 style={{ color: 'white',textAlign: 'center', marginTop: '100px', fontSize: '40px', fontFamily: 'monospace', marginBottom: '15px'  }}>Certifications</h2>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', fontSize: '15px', paddingBottom: '15px' }}>
            <Box sx={{ textAlign: "center", color: 'white', fontFamily: 'monospace', marginTop: '0px' }}>
              KPMG AU Data Analyst Job Simulation (2023)
            </Box>
            <Box sx={{ textAlign: "center", color: 'white', fontFamily: 'monospace',  }}>
              Certified Software Engineer (2023)
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
