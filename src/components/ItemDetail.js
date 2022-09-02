import React from 'react'

const ItemDetail = ({
  nombre= 'Product',
  precio= 3000,
  descripcion = 'Totus Pastelería',
  imagen= 'https://luciapaula.com/wp-content/uploads/2021/04/2021-04-18-062903063-820x1024.jpg'
}) => {

return (
    <>
    <div className="title">
      <h2 className='fw-bold'>{nombre}</h2>
    </div>
    <div className="content">
      <div className="productos__image--display">
        <img
          src={imagen}
          alt={nombre}
          className="productos__image"
        />
      </div>
      <div className="productos__detalle">
        <p>Precio: ${precio}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  </>


)


}

export default ItemDetail;