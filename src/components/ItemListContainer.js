import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount' 
import ItemList from './ItemList';
import Spinner from './Spinner.js'
import ItemDetailContainer from './ItemDetailContainer';
import { products } from './mock.js'



const ItemListContainer = () => {

    const [productList, setproductList] = useState([])
    const [isLoading, setisLoading] = useState(false);



    const getProducts = () => new Promise ((resolve, reject) => {
    setTimeout(()=>resolve(products), 2000)    
    })
    
    useEffect(() => {
    setisLoading(true);
    getProducts()
    .then(products => setproductList(products))
    .catch(error => console.error(error))
    setisLoading(false)
        }, [])
    
    console.log(productList)

    return(
    <div>
    <div>
    {isLoading ? <Spinner /> : <div>
    <ItemCount stock={6} initial={1} cantidadAgregada={2}/>
    <ItemList productList={productList} />
    <div className='lugar'>
    <ItemDetailContainer  />
    </div>
   </div>}
    </div>
    </div>
    )
}
  
  export default ItemListContainer;