import React from 'react'

const ItemDetail = ({
  nombre,
  precio,
  descripcion,
  imagen
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