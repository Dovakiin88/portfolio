import React from 'react';
import Typography from '@mui/material/Typography';

interface DirectionsProps {
    directions: { [method: string]: string[] }[];
}

const Directions: React.FC<DirectionsProps> = ({ directions }) => {
    return (
        <div style={{ color:'white' }}>
            <Typography variant='h5'>Directions: </Typography>
            {directions.map((method, index) => (
                <div key={index}>
                    {Object.entries(method).map(([methodName, steps], idx) => (
                        <div key={idx}>
                            
                            <Typography variant="h6">{methodName}:</Typography>
                            <ol>
                                {steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>
                                        <Typography variant="body1">{step}</Typography>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Directions;

