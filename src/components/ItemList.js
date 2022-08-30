import React from 'react'
import Item from './Item.js'

const ItemList = ({productList}) =>{
    console.log(productList)


    return(
    <div>
        {
        productList.map(item => 
        <Item 
            key={item.id} 
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