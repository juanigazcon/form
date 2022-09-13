import carrito from './Images/carrito1.png';
import React, {useContext} from 'react';
import { CartContext } from './CartContext';



const CartWidget = () => {
const[items,setItems]= useContext(CartContext);
setItems(items);
let totalItems = items.reduce((acc, elemento) => acc + (elemento.cantidad), 0);
return (
<li className="nav-item px-3">
<img src={carrito} className="ml-5 pl-5" alt="Carrito" />  
  {totalItems}
</li>
)}

export default CartWidget;