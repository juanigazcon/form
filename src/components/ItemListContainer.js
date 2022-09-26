import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import Spinner from './Spinner.js'
//import { getProducts, getProductsByCategory } from './mock.js'
import { useParams } from 'react-router-dom';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebaseConfig'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { categoryId } = useParams();
    


    const getProducts = async () => {
		const q = query(
			collection(db, 'products')
		);
		const docs = [];
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		/* console.log(docs); */
		setProducts(docs);
	};

    const getProductsByCategory = async (categoryId) => {
		const q = query(
			collection(db, 'products')  , where('category', '==', categoryId) 
		);
		const docs = [];
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setProducts(docs);
	};


    
    useEffect(() => {
    setisLoading(true);


    if(!categoryId){
    getProducts();
    setisLoading(false)
    } else {
    getProductsByCategory(categoryId)
    setisLoading(false)
    }

}, [categoryId])
    
    return(
    <div>
    <div>
    {isLoading ? <Spinner /> : <div className='space'>
    <ItemList productList={products} />
    <div className='lugar'>
    </div>
   </div>}
    </div>
    </div>
    )
}
  
  export default ItemListContainer;