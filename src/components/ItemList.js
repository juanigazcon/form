import React from 'react'
import Item from './Item.js'

const ItemList = ({productList}) =>{

    return(
        <div className='tortas px-0 mx-0'>
         {
        productList.map(item => 
        <Item
            key={item.id} 
            id={item.id}
            imagen={item.image} 
            nombre={item.nombre} 
            precio={item.precio} 
            stock={item.stock}
        />
    )         
    }
    </div>
    

    )
}

export default ItemList;