import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom'
import { getProductsById } from './mock.js'
import Spinner from './Spinner.js'


const ItemDetailContainer = () => {

    const [itemDetails, setitemDetails] = useState([])
    const [isLoading, setisLoading] = useState(true);
    const {id} = useParams();
    

    useEffect(() => {
    setisLoading(true);

    getProductsById(id)
    .then(products => {setitemDetails(products)
    setisLoading(false);
    })
    .catch(error => console.error(error))
    

    
    }, [id])
    
    return(
    
    <div className='mt-4'>
        { isLoading ? <Spinner /> :      
        itemDetails.map(prod => 
        <ItemDetail 
        key={prod.id} 
        prod={prod}
        />
    )         
    }
    </div>
   
    )
}
  
  export default ItemDetailContainer;