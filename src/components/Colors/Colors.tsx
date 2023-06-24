import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ColorContextInterface, ColorContextWrapper } from "./ColorContextWrapper";

const Colors = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [currentColor, setCurrentColor] = useState('');

    const value: ColorContextInterface = {
        colors,
        setColors
    };

    useEffect(() => {
        if (currentColor) {
          setColors(prevColors => [...prevColors, currentColor]);
        }
    }, [currentColor]);

    const changeColor = () => {
        const availableColors = ['red', 'green', 'blue', 'black', 'orange'];
        const previousColor = colors[colors.length - 1];
        let nextColor = '';
    
        if (previousColor === 'blue') {
          nextColor = 'green';
        } else {
          const filteredColors = availableColors.filter(color => color !== previousColor);
          nextColor = filteredColors[Math.floor(Math.random() * filteredColors.length)];
        }
    
        setCurrentColor(nextColor);
      };

    return (
        <ColorContextWrapper.Provider value={value}>
            <Box display='flex' h='100vh' alignItems='center' justifyContent='center'>
                <Box>
                    <Button bg={currentColor || 'yellow'} color='white' onClick={changeColor}>
                        Change Color
                    </Button>
                    <Box w='50vw' textOverflow='auto'>
                        {colors.map((color, index) => 
                            <React.Fragment key={index}>
                                {index !== 0 && ', '}
                                <Text display="inline" color={color}>{color}</Text>
                            </React.Fragment>
                        )}
                    </Box>
                </Box>
            </Box>
        </ColorContextWrapper.Provider>
    );
}

export default Colors