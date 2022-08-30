import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount' 
import ItemList from './ItemList';
import { products } from './mock.js'



const ItemListContainer = () => {

    const [productList, setproductList] = useState([])


    const getProducts = () => new Promise ((resolve, reject) => {
    setTimeout(()=>resolve(products), 2000)    
    })
    
    useEffect(() => {
    getProducts()
    .then(products => setproductList(products))
    .catch(error => console.error(error))
    
    
    }, [])
    
    console.log(productList)

    return(
    <div>
    <div>
    <ItemCount stock={6} initial={1} cantidadAgregada={2}/>
    <ItemList productList={productList} />
    </div>
    </div>
    )
}
  
  export default ItemListContainer;