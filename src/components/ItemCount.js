import React from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({cantidadAgregada}) => {


return (
    <div className="container col-md-4 d-flex flex-column align-items-center pt-4 py-3">
    <div className="container col-md-4 d-flex flex-row justify-content-center px-0" >
      <p>Cantidad: {cantidadAgregada}</p>
    </div>
    <div className="container col-md-6 d-flex flex-row justify-content-center px-0">
    <Link to='/cart' className="nav-link px-3" style={{color: "#794245"}}>
    <button className="button">Finalizar compra</button>
    </Link>
    <Link to='/' className="nav-link px-3" style={{color: "#794245"}}>
    <button className="button">Seguir comprando</button>
    </Link>
    </div>
    </div>
)}

export default ItemCount;

