import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom'
import { getProductsById } from './mock.js'



const ItemDetailContainer = () => {

    const [itemDetails, setitemDetails] = useState([])
    const {id} = useParams();


    
    useEffect(() => {
    getProductsById(id)
    .then(products => setitemDetails(products))
    .catch(error => console.error(error))
    
    
    }, [id])
    
    console.log(itemDetails)

    return(
    
    <div className='mt-4'>
           {
        itemDetails.map(item => 
        <ItemDetail 
            key={item.id} 
            imagen={item.image2} 
            nombre={item.nombre} 
            precio={item.precio} 
            descripcion={item.descripcion}
        />
    )         
    }
    </div>
   
    )
}
  
  export default ItemDetailContainer;