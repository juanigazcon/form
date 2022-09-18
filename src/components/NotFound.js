import { Link } from 'react-router-dom';


const NotFound = () => {


return (
    <div className="container col-md-6 d-flex flex-column align-items-center pt-4 py-3">
    <div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0">
        <p className='pt-3'>Parece que el carrito está vacío!</p>
    </div>
    <div className="container col-md-12 d-flex flex-row justify-content-center align-items-center px-0 pt-4">
        <Link to='/'>
        <button className="button">Menú de productos</button>
        </Link>
    </div>
    </div>
)}

export default NotFound;

