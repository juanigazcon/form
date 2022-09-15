import React from 'react'
import Item from './Item.js'


const ItemList = ({productList}) =>{


    return(
        <div className='tortas px-0 mx-0'>
         {
        productList.map(prod => 
        <Item
            key={prod.id} 
            prod={prod}
        />
    )         
    }
    </div>
    

    )
}

export default ItemList;