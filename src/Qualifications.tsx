import React, { ChangeEvent } from 'react'
import './main.css'
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import ai3 from './images/AI_3.jpg'
import { json } from 'node:stream/consumers';
import binary3 from './images/binary3.png'
import data from './recipie_db.json'
import Ingredients from './Ingredients';
import Directions from './Directions';

const URL = `http://api.weatherapi.com/v1/current.json?key=c3c1111edfd3428a9b901227231312&q=75024&aqi=no`


interface Recipie {
    id: number;
    name: string;
    description: string;
    cookware: string[];
    ingredients: {
        "meats and other animal products"?: { name: string; quantity: string }[];
        spices?: { name: string; aquiredFrom: string; websites: string[]; quantity: string }[];
        "other ingredients"?: { name: string; aquiredFrom: string; websites: string; quantity: string }[];
        "vegetables & herbs"?: { name: string; quantity: string }[];
    }[];
    directions: { [method: string]: string[] }[]
}



const Qualifications: React.FC = () => {

    const [temp, setTemp] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                setTemp(json.current.temp_f)
            })
        }
        fetchData();
    }, []);

    const [recipies, setRecipies] = useState<Recipie[]>([]);
    const [selectedRecipie, setSelectedRecipie] = useState<Recipie | null>(null);

    useEffect(() => {
        setRecipies(data['Best Recipies'] as Recipie[] || []);
    }, []);

    const handleRecipieChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(e.target.value, 10);
        const selected = recipies !== null ? recipies.find((recipie) => recipie.id === selectedId) : null;
        setSelectedRecipie(selected || null)
    };




    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ backgroundColor: 'black', width: '375px' }}>
                <Navbar />
            </Box>
            <Box>
                <Box sx={{ flexFlow: 1, margin: 'auto', backgroundColor: 'black', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <img src={ai3} style={{ alignItems: 'center', justifyContent: 'center', objectFit: 'cover', display: 'flex', margin: 'auto', marginRight: '420px' }} alt="" />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Typography variant='body1' style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'monospace', color: 'white' }}><h1>Skill Set</h1></Typography>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                            <Typography style={{ fontFamily: 'monospace', fontSize: '25px', color: 'white' }}>CyberSecurity</Typography>
                            <div>
                                <ul style={{ fontFamily: 'monospace', fontSize: '17px', color: 'white' }}>
                                    <li>Penetration testing</li>
                                    <li>IDS/IPS</li>
                                    <li>GPO</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                            <Typography style={{ fontFamily: 'monospace', fontSize: '25px', color: 'white' }}>Web Design</Typography>
                            <div>
                                <ul style={{ fontFamily: 'monospace', fontSize: '17px', color: 'white' }}>
                                    <li>Responsive Web design</li>
                                    <li>React.js</li>
                                    <li>Flask</li>
                                    <li>JavaScript/TypeScript</li>
                                    <li>Node.js</li>
                                    <li>PostgreSQL</li>
                                    <li>API building and Testing</li>
                                    <li>UX/UI</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                            <Typography style={{ fontFamily: 'monospace', fontSize: '25px', color: 'white' }}>Data Analysis</Typography>
                            <div>
                                <ul style={{ fontFamily: 'monospace', fontSize: '17px', color: 'white' }}>
                                    <li>Structured Query Language (SQL)</li>
                                    <li>NoSQL</li>
                                    <li>Database Management</li>
                                    <li>Database Construction</li>
                                    <li>Tensor Flow</li>
                                    <li>Scikit Learn</li>
                                    <li>Keras</li>
                                    <li>Numpy</li>
                                    <li>Pandas</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                            <Typography style={{ fontFamily: 'monospace', fontSize: '25px', color: 'white' }}>Software Engineering</Typography>
                            <div>
                                <ul style={{ fontFamily: 'monospace', fontSize: '17px', color: 'white' }}>
                                    <li>Object Oriented Programming or (OOP)</li>
                                    <li>SQL</li>
                                    <li>Machine Learning (AI)</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '20px', color: 'white' }}><h1>Software and Databases</h1></Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>Azure</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>AWS</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>Microsoft Office Suite</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>Tableau</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>VScode</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>Postman</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '18px', color: 'white' }}>Windows OS</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '17px', color: 'white' }}>Linux</Typography>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <Typography style={{ color: 'white', textAlign: 'center', fontSize: '25px', fontFamily: 'monospace' }}>
                                <h2>APIs</h2>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <div style={{ color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                                <div><h3 style={{ fontSize: '40px', marginBottom: '5px', fontFamily: 'monospace' }}>Weather API</h3></div>
                                <div style={{ fontSize: '20px' }}>Current Temp: </div>
                                <div style={{ fontSize: '20px' }}>Dallas: {temp}F</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} style={{}}>
                            <div>
                                <h1 style={{ margin: 'auto', fontFamily: 'monospace', color: 'white', marginBottom: '5px', fontSize: '40px', paddingTop: '35px' }}>Custom Recipie API</h1>
                            </div>
                            <div style={{ alignItems: 'center', justifyItems: 'center', margin: 'auto', paddingLeft: 'auto' }}>
                                <label htmlFor='recipieSelector'>Choose a Recipie</label>
                                <select id='recipieSelector' onChange={handleRecipieChange}>
                                    <option style={{ fontFamily: 'monospace' }} value={undefined}>Select a Recipie</option>
                                    {recipies !== null && recipies.map((recipie) => (
                                        <option key={recipie.id} value={recipie.id}>
                                            {recipie.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ color: 'white' }}>
                                <Typography variant='h4'>{selectedRecipie?.name}</Typography>
                                <Typography variant='body1'>{selectedRecipie?.description}</Typography>
                                {selectedRecipie && (
                                    <Ingredients ingredients={selectedRecipie.ingredients} />
                                )}
                            </div>
                            <div>
                                {selectedRecipie && (
                                    <Directions directions={selectedRecipie.directions} />
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Qualifications;