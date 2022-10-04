import React from 'react';

const Success = ({ purchaseID }) => {

	return (
		<div>
		<h3 className="title fw-bolder">Gracias por comprar en Totus Pastelería. Su ID de pedido es el {purchaseID}.</h3>
		</div>
	);
};

export default Success;
