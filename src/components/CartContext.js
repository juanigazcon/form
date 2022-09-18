import React, { createContext, useState, useContext } from "react"
import swal from "sweetalert"

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([]);


const agregarAlCarrito = (item) => {        
	let productoExistenteEnCarrito = items.some(producto => producto.id === item.id);
      console.log(productoExistenteEnCarrito)

      if(productoExistenteEnCarrito){
		const index = items.findIndex(producto => producto.id === item.id);
		const cantidadAnterior = items[index].cantidad 
		items.splice(index, 1)
        setItems([...items, {...item, cantidad: item.cantidad+cantidadAnterior}])
      } else{
        setItems([...items, {...item, cantidad: item.cantidad}])
        console.log(items)
      }
}

	const eliminarProducto = (id) => {
		let productoEliminado = items.find(productoEliminado => productoEliminado.id === id)
		swal({
			title: 'Estás seguro de que querés eliminar todas las unidades de ' + productoEliminado.nombre + '  del carrito?',
			buttons: ["No", "Sí"]
		}).then( result => {
			if (result) {
			setItems(items.filter((prod) => prod.id !== id))
			}})
	} 

	const vaciarCarrito = () => {
		swal({
			title: 'Estás seguro de que querés vaciar el carrito?',
			buttons: ["No", "Sí"]
		}).then( result => {
			if (result) {
   		setItems([])
			}})
    }

const total = () => {
		return items.reduce( (acum, item) => acum = acum + item.cantidad , 0 )
	}
 

	return (
		<CartContext.Provider value={
			{items, 
			setItems, 
			agregarAlCarrito,
			eliminarProducto,
			vaciarCarrito,
			total}}>
			{children}
		</CartContext.Provider>
	);
};


export default ItemsProvider