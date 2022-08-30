import React, { useState } from 'react';

const ItemCount = ({stock, initial, cantidadAgregada}) => {
	const [counter, setCounter] = useState(initial);

	const aumentarCantidad = () => {
        if (counter-initial < stock){
		setCounter((cantItems) => cantItems +1);
        stock = stock --;
    }
	};

	const disminuirCantidad = () => {
        if(counter >= 1){
		setCounter((cantItems) => cantItems -1);
        stock = stock ++;
        }
	};

    const agregarUnidades = () => {
        if((counter<stock) && ((cantidadAgregada+(counter-initial)) <= stock)) {
            setCounter((cantItems) => cantItems + cantidadAgregada)
            stock = stock-cantidadAgregada;
            console.log(stock)
        }
    }

return (
    <div className="container col-md-4 d-flex flex-column align-items-center pt-4 py-3">
    <div className="container col-md-4 d-flex flex-row align-items-center px-0" >
      <p>Counter {counter}</p>
    </div>
    <div className="container col-md-6 d-flex flex-row align-items-center px-0">
      <button onClick={disminuirCantidad} className="button">-</button>
      <button onClick={agregarUnidades} className="button">Agregar al carrito</button>
      <button onClick={aumentarCantidad} className="button">+</button>
    </div>
    </div>
)}

export default ItemCount;

