import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import NotFound from './NotFound'

export const Cart = () => {

    const {items, eliminarProducto, vaciarCarrito, total} = useCartContext()

    return (
        <div>
            { !items.length > 0 ? 
            <NotFound /> :
                <div>
                <h2 className='title fw-bold'>Detalle del carrito</h2> 
                <hr />
                {items.map(prod => <div>
                  <div className="title">
                    <h6 className='fw-bold'>{prod.nombre}</h6>
                  </div>
                  <div key={prod.id} className="content_cart">
                    <div></div>
                    <div className="productos__image--display">
                      <img src={prod.image2} alt={prod.nombre} className="productos__image_cart" />
                    </div>
                    <div className="productos__detalle">
                      <p>Precio: ${prod.precio * prod.cantidad}</p>
                      <p style={{textAlign:'center'}}>Cantidad: {prod.cantidad}</p>
                    </div>
                    <div></div>
                  </div>
                  <div className="container col-md-12 d-flex flex-column align-items-center pt-4 py-3">
                    <div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0">
                      <button className="button" key={prod.id} onClick={()=> eliminarProducto(prod.id)}>Eliminar {prod.nombre} del carrito</button>
                    </div>
                  </div>
                  <hr />
                </div>
                      )}
                      <div className="container col-md-12 d-flex flex-column align-items-center pt-4 py-3">
                        <p>Unidades en carrito: {total()}</p>
                        <p>Precio total: ${items.reduce( (acum, item) => acum = acum + (item.cantidad * item.precio), 0 )}</p>
                </div>
                 <div className="container col-md-12 d-flex flex-column align-items-center pt-4 py-3">
                    <div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0">
                        
                            <button className="button" onClick={()=> vaciarCarrito()}> Vaciar carrito </button>
                    
                        <Link to='/checkout'>
                            <button className="button"> Confirmar compra </button>
                        </Link>
                    </div>
                </div>
                </div>
            }
        </div>
    )
}
