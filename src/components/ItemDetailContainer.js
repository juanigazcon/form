import React, { useEffect, useState } from 'react'
import { products } from './mock.js'
import ItemDetail from './ItemDetail.js'



const ItemDetailContainer = () => {

    const [itemDetails, setitemDetails] = useState([])


    const getDetails = () => new Promise ((resolve, reject) => {
    setTimeout(()=>resolve(products), 2000)    
    })
    
    useEffect(() => {
    getDetails()
    .then(products => setitemDetails(products))
    .catch(error => console.error(error))
    
    
    }, [])
    
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