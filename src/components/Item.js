import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({prod}) => {


return (
    <div className="products">
      <img
        src={prod.image}
        alt={prod.nombre}
        className="products__pictures"
      />
    <h3 className='pt-3 fw-bold'>
        {prod.nombre}
    </h3>
    <p className="pt-1 fw-bold">Precio: ${prod.precio}</p>
    <Link to={`/product/${prod.id}`} className="pt-2">
    <button  className="button2">Ver detalle</button>
    </Link>
  </div>
  


)

}

export default Item;