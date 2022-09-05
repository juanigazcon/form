import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({
  id=0,
  nombre= 'Product',
  precio= 3000,
  stock = 10,
  imagen= 'https://luciapaula.com/wp-content/uploads/2021/04/2021-04-18-062903063-820x1024.jpg',
}) => {


return (
    <div className="products">
      <img
        src={imagen}
        alt={nombre}
        className="products__pictures"
      />
    <h3 className='pt-3 fw-bold'>
        {nombre}
    </h3>
    <p className="pt-1 fw-bold">Precio: ${precio}</p>
    <p className="pt-1 fw-bold">Stock disponible: {stock} unidades</p>
    <Link to={`/product/${id}`}>
    <button  className="button2">Ver detalle</button>
    </Link>
  </div>
  


)


}

export default Item;