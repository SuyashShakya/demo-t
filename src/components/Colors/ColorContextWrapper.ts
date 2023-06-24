import React from 'react';

export interface ColorContextInterface {
	colors?: string[]
	setColors?: React.Dispatch<React.SetStateAction<string[]>> 
}

export const ColorContextWrapper = React.createContext<ColorContextInterface | null>(null);