import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const initialState = [];


export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

    const total = () => {
		return (items.reduce((acc, elemento) => acc + (elemento.cantidad), 0));
        
    };

	return (
		<CartContext.Provider value={[items, setItems, total]}>
			{children}
		</CartContext.Provider>
	);
};


