import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';



const ItemDetail = ({prod}) => {

const {agregarAlCarrito} = useContext(CartContext)
const [unidadesAgregadas, setUnidadesAgregadas] = useState(false)

const cantidadAgregada = (cantidad) =>{
  setUnidadesAgregadas(true);
  agregarAlCarrito({ ...prod, cantidad: cantidad })
 }




return (
    <>
    <div className="title">
      <h2 className='fw-bold'>{prod.nombre}</h2>
    </div>
    <div className="content">
      <div className="productos__image--display">
        <img
          src={prod.image2}
          alt={prod.nombre}
          className="productos__image"
        />
      </div>
      <div className="productos__detalle">
        <p>Precio: ${prod.precio}</p>
        <p style={{textAlign:'center'}}>{prod.descripcion}</p>
      </div>
    </div>
    <div>
    {unidadesAgregadas ?
        <> 
        <ItemCount initial={0} stock={10} onAdd={cantidadAgregada} />
        <div className="container col-md-12 d-flex flex-column align-items-center pt-4 py-3">
        <div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0">
            <Link to='/'> <button className="button"> Seguir comprando </button></Link> 
            <Link to='/cart'> <button className="button"> Ir al Carrito </button></Link> 
        </div>
        </div>
       </>
      : 
    <ItemCount initial={1} stock={10} onAdd={cantidadAgregada} />                    
      }
  </div>
                      
  </>


)


}

export default ItemDetail;