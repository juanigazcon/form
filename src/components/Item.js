import React from 'react'

const Item = ({
  nombre= 'Product',
  precio= 3000,
  stock = 10,
  imagen= 'https://luciapaula.com/wp-content/uploads/2021/04/2021-04-18-062903063-820x1024.jpg'
}) => {

return (
  <div className='container  d-flex flex-column align-items-center'>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
<div className="container col-md-4 d-flex flex-column align-items-center pt-4 py-3" >
    <img
      src={imagen}
      alt={nombre}
      className="container-fluid px-0 tortas"
    />
  <h3 className="pt-3 fw-bold">
      {nombre}
  </h3>
  <p className="pt-1 fw-bold">Precio: ${precio}</p>
  <p className="pt-1 fw-bold">Stock disponible: {stock} unidades</p>
</div>

</div>


)



}

export default Item;