//import ItemCount from './ItemCount' 
import TextField  from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { getProductsById } from './mock';
import { Link } from 'react-router-dom';



const ItemDetail = ({
  nombre,
  precio,
  descripcion,
  imagen,
  stock
}) => {

  const [value,setValues] = useState('');
  const [hideForm] = useState(false);
  const [items, setItems, total] = useContext(CartContext);
  const [item, setItem] = useState([])
  const {id} = useParams();
  let existe = items.some(producto => producto.id === id);
  

  useEffect(() => {
    getProductsById(id)
  .then(producto => {setItem(producto)
  })  
  }, [id])

 console.log(item);

  const onChangeValue = (e) => {
      if(value<=stock) {
      setValues(e.target.value)
      console.log(value)
  }

    }

     const onSubmit = (e) => {
      e.preventDefault (); 

      let productoElegido= item[0]
      console.log(productoElegido)
      let productoExistenteEnCarrito = items.some(producto => producto.id === productoElegido.id);
      console.log(productoExistenteEnCarrito)

      if(productoExistenteEnCarrito){
        productoElegido.cantidad = productoElegido.cantidad + parseInt(value);
        setItems(items)
        console.log(items)
      } else{
        productoElegido.cantidad = parseInt(value);
        items.push(productoElegido)
        setItems(items)
        console.log(items)
      }
      setValues('');  
      
    }

  
    
    const vaciarCarrito = () => {
      items.splice(0, items.length);
      setItems(items)
      console.log(items);
     }

     const eliminarProducto = (id) => {
      let productoEliminado = items.find(productoEliminado => productoEliminado.id === id)
      items.splice(items.indexOf(productoEliminado), 1);
      setItems(items)
      console.log(items);
      
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
        <button className="button" onClick={()=>total()}>Agregar al carrito</button>
          </form>}
          </div>
          <div></div>
        </div>
        <div className='container col-md-8 d-flex flex-row justify-content-center pt-4'>
        {(items.length===0)? null :
          <div className="container col-md-6 d-flex flex-row justify-content-center px-0">
            <Link to='/cart' className="nav-link px-3" style={{color: "#794245"}}>
              <button className="button">Finalizar compra</button>
            </Link>
          </div>
        }
        {(!existe)? null :
          <div className="container col-md-6 d-flex flex-row justify-content-center px-0">
            <button className="button" onClick={eliminarProducto}>Eliminar {nombre} del carrito</button>
          </div>  
        }
        { (items.length===0)? null :
          <div className="container col-md-6 d-flex flex-row justify-content-center px-0">
            <button className="button" onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        }
      </div>
  </>


)


}

export default ItemDetail;