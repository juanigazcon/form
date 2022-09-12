import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import Spinner from './Spinner.js'
import { getProducts, getProductsByCategory } from './mock.js'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const { categoryId } = useParams();

    
    useEffect(() => {
    setisLoading(true);


    if(!categoryId){
    getProducts()
    .then(products => setProducts(products))
    .catch(error => console.error(error))
    setisLoading(false)
    } else {
    getProductsByCategory(categoryId)
    .then(products => setProducts(products))
    .catch(error => console.error(error))
    setisLoading(false)
    }

}, [categoryId])
    
    console.log(products)

    return(
    <div>
    <div>
    {isLoading ? <Spinner /> : <div>
    <ItemList productList={products} />
    <div className='lugar'>
    </div>
   </div>}
    </div>
    </div>
    )
}
  
  export default ItemListContainer;