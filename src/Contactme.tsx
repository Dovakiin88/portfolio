import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Divider } from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormEvent } from 'react';
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom';
import Lin from '../src/images/linkedin.png';
import weirdcat from '../src/images/github.png';
import binary3 from '../src/images/binary3.png';
import eyes from '../src/images/AI 1_1.jpg';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';


interface ItemProps {
  children: React.ReactNode;
  theme: any; // Adjust the type based on your theme type
}

const StyledItem = styled(Paper)<ItemProps>(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#141415',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.light,
}));

const Item: React.FC<ItemProps> = ({ children, theme }) => (
  <StyledItem theme={theme}>
    {children}
  </StyledItem>
);

const FullWidthGrid: React.FC = () => {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_5h71cum', 'template_298y11j', form.current, 'uh6qe1FyjvIwpeRfL')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  return (
    <Box sx={{ backgroundColor: 'black' }}>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <img src={eyes} style={{ alignItems: 'center', justifyContent: 'center', objectFit: 'cover', display: 'flex', margin: 'auto' }} alt="" />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant='body1' style={{ color: 'white', textAlign: 'center', backgroundColor: '#141415', fontFamily: 'monospace' }}><h1 style={{ fontSize: '70px', margin: '0' }}>Contact Me</h1></Typography>
          </Grid>
          <Grid item xs={6} md={6} style={{ backgroundColor: 'black', color: 'white' }}>
            <Typography style={{ backgroundColor: '#141415', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>Reach out to me on my LinkedIn!  <a href="https://www.linkedin.com/in/ashley-andrews-software-engineer-873666238/"><Button><img src={Lin} style={{ height: '30px' }} alt="" /></Button></a></Typography>
          </Grid>
          <Grid item xs={6} md={6} style={{ backgroundColor: 'black', color: 'white' }}>
            <Typography style={{ backgroundColor: '#141415', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>Check out my GitHub!  <a href="https://github.com/Dovakiin88?tab=repositories"><Button><img src={weirdcat} style={{ height: '30px' }} alt="" /></Button></a></Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', backgroundImage: `url(${binary3})` }}>
        <Box sx={{ margin: 'auto', display: 'flex', flexDirection: 'column', paddingTop: '30px' }}> <h1>You can also send me an email. Would love to hear from you!</h1></Box>
        <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', minWidth: '500px', backgroundColor: 'black' }}>
            <FormControl style={{ backgroundColor: 'black', padding: '15px' }}>
              <FormLabel style={{ color: 'white' }}>First Name</FormLabel>
              <TextField
                className='textfield'
                type="text"
                name='first_name'
              />
            </FormControl>
            <FormControl style={{ backgroundColor: 'black', padding: '15px' }}>
              <FormLabel style={{ color: 'white' }}>Last Name</FormLabel>
              <TextField
                className='textfield'
                type="text"
                name='last_name'
              />
            </FormControl>
            <FormControl style={{ backgroundColor: 'black', padding: '15px' }}>
              <FormLabel style={{ color: 'white' }}>Email</FormLabel>
              <TextField
                className='textfield'
                type="email"
                name='email'
              />
            </FormControl>
            <FormControl style={{ backgroundColor: 'black', padding: '15px' }}>
              <FormLabel style={{ color: 'white' }}>Message</FormLabel>
              <TextField
                className='textfield'
                multiline
                size='medium'
                name='message'
              />
            </FormControl>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '30px', backgroundColor: 'black' }}>
              Submit
            </Button>
          </form>
        </Box>
        <Box sx={{ margin: 'auto', marginTop: '40px', backgroundColor: 'black', color: 'white' }}>
          Click the house to go back to the main page
        </Box>
        <Box sx={{ marginTop: '80px', margin: 'auto', backgroundColor: 'black' }}>
          <Button component={Link} to='/bio'><HouseIcon /> </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FullWidthGrid;







