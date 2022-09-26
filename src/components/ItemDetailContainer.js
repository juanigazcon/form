import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner.js'
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebaseConfig'



const ItemDetailContainer = () => {

    const [itemDetails, setitemDetails] = useState([])
    const [isLoading, setisLoading] = useState(true);
    const {id} = useParams();
    


    const getProductsById = async (id) => {
		const q = query(
			collection(db, 'products'), where('id','==', id) 
		);
		const docs = [];
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setitemDetails(docs);
	};

    useEffect(() => {
    setisLoading(true);
    if(id){
    getProductsById(id)
    setisLoading(false)
        }

    
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