import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'
//import swal from "sweetalert"
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import Success from './Success';




const initialState = {
	name: '',
	lastName: '',
	email: '',
};



const Form = () => {
    
	const {setItems} = useCartContext()
    const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
		
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values.name);
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		 console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	const volver = () => {
   		setItems([])
    }
	return (
		<div>
			<h2 className='title fw-bold'>Datos personales</h2>
			<form  onSubmit={onSubmit} className="container col-md-12 d-flex flex-column justify-content-center align-items-center px-0">
			<label>Nombre</label>
				<input
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<label  htmlFor="nombreBuyer">Apellido</label>
				<input
					style={{ margin: 10, width: 400 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
				/>
				<label  htmlFor="nombreBuyer">Email</label>
				<input
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
				/>
				<div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0">
            <Link to='/'> <button className="button" onClick={()=> volver()}> Volver </button></Link> 
            <button className="button" onClick={()=> volver()}> Confirmar compra </button>
        </div>
			</form>
			{purchaseID && <Success purchaseID={purchaseID} />}
		</div>
	);
}

export default Form
