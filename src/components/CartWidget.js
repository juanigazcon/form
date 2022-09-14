import carrito from './Images/carrito1.png';
import React, {useContext} from 'react';
import { CartContext } from './CartContext';



const CartWidget = () => {
const[items,setItems, total]= useContext(CartContext);
setItems(items)
let quantity = total();

return (
<li className="nav-item px-3">
<img src={carrito} className="ml-5 pl-5" alt="Carrito" />  
{quantity}
</li>
)}

export default CartWidget;