import ItemCount from './ItemCount' 
import TextField  from '@mui/material/TextField';
import React, { useState } from 'react';



const ItemDetail = ({
  nombre,
  precio,
  descripcion,
  imagen,
  stock
}) => {

  const [value,setValues] = useState('');
  const [hideForm, setHideForm] = useState(false);


  const onChangeValue = (e) => {
      if(value<=stock) {
      console.log("hola")
      setValues(e.target.value)
      console.log(value)
  }

    }

  
    const onSubmit = (e) => {
      e.preventDefault (); 
      if(value<=stock){
      console.log(value)
      setHideForm(true);
      } else{
        setValues('');
        alert("No hay stock suficiente para cubrir el pedido, por favor seleccione una cantidad más chica.")
      }

    }
  
  

  

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
        {hideForm ? <p>Stock disponible: {stock - value} unidades</p> : <p>Stock disponible: {stock} unidades</p>}
        <p style={{textAlign:'center'}}>{descripcion}</p>
      </div>
    </div>
    <div  className="quantity">
        <div></div>
        <div>
      {hideForm ? null :  
      <form onSubmit={onSubmit} className="container col-md-8 d-flex flex-row justify-content-center px-0">
      <TextField
          className='Textfield'
          onChange={onChangeValue}
          value={value}
          variant='filled'
        />
        <button className="button">Agregar al carrito</button>
          </form>}
          </div>
          <div></div>
        </div>
    {hideForm ? <ItemCount cantidadAgregada={value}/> : null}
  </>


)


}

export default ItemDetail;