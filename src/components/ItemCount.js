import {useState} from 'react';


const ItemCount = ({initial, stock, onAdd}) => {
const[counter, setCounter] = useState(initial)

const agregarUnidad =()=>{
  counter < stock ? setCounter(counter+1) : alert("No hay stock suficiente")      
}

const quitarUnidad =()=>{
  if(counter > initial) setCounter(counter - 1)
} 

return (
    <div className="container col-md-6 d-flex flex-column align-items-center pt-4 py-3">
    <div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0">
    <button className="button" onClick={quitarUnidad}>-</button>
    <div className="contador fw-bold">{counter}</div>
    <button className="button" onClick={agregarUnidad}>+</button>
    <button className="button" onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
    </div>
)}

export default ItemCount;

