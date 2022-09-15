import React, { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([]);

/* const agregarAlCarrito = (item) =>{
      let productoExistenteEnCarrito = items.some(producto => producto.id === item.id);
      console.log(productoExistenteEnCarrito)

      if(productoExistenteEnCarrito){
		const index = items.findIndex(producto => producto.id === item.id);
		const cantidadAnterior = items[index].cantidad 
		//items[index].cantidad = (cantidadAnterior + item.cantidad)
		//console.log(items)
		items.splice(index, 1)
        setItems([...items, {...item, cantidad: item.cantidad+cantidadAnterior}])
      } else{
        //items.push(item)
        setItems([...items, {...item, cantidad: item.cantidad}])
        console.log(items)
      }
} */

const agregarAlCarrito = (item) => {        
	let productoExistenteEnCarrito = items.some(producto => producto.id === item.id);
      console.log(productoExistenteEnCarrito)

      if(productoExistenteEnCarrito){
		const index = items.findIndex(producto => producto.id === item.id);
		const cantidadAnterior = items[index].cantidad 
		//items[index].cantidad = (cantidadAnterior + item.cantidad)
		//console.log(items)
		items.splice(index, 1)
        setItems([...items, {...item, cantidad: item.cantidad+cantidadAnterior}])
      } else{
        //items.push(item)
        setItems([...items, {...item, cantidad: item.cantidad}])
        console.log(items)
      }
}

	const eliminarProducto = (id) => {
		setItems(items.filter((prod) => prod.id !== id))
	} 

	const vaciarCarrito = () => {
   		setItems([])
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