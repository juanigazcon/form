import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const initialState = [];


export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

	return (
		<CartContext.Provider value={[items, setItems]}>
			{children}
		</CartContext.Provider>
	);
};


