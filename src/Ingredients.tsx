import React from 'react';
import Typography from '@mui/material/Typography';

interface IngredientsProps {
    ingredients: {
        "meats and other animal products"?: { name: string; quantity: string }[];
        spices?: { name: string; aquiredFrom: string; websites: string[]; quantity: string }[];
        "other ingredients"?: { name: string; aquiredFrom: string; websites: string; quantity: string }[];
        "vegetables & herbs"?: { name: string; quantity: string }[];
    }[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
    return (
        <div>
            <Typography variant="h6">Ingredients:</Typography>
            <ul>
                {ingredients.map((category, index) => (
                    <li key={index}>
                        <Typography variant="subtitle1">{Object.keys(category)[0]}:</Typography>
                        <ul>
                            {(category[Object.keys(category)[0] as keyof typeof category] || []).map((ingredient, idx) => (
                                <li key={idx}>
                                    {ingredient.name}: {ingredient.quantity}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;

