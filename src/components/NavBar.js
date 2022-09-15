import logo from './Images/logototus-ppal.png';
import CartWidget from './CartWidget.js' 
import { Link } from 'react-router-dom';
import React from 'react';
import { useCartContext } from './CartContext';



const NavBar = () => {

  const {total} = useCartContext();

return (
<header>
  <style
    dangerouslySetInnerHTML={{__html:
      "\n@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100&display=swap');\n"
    }}
  ></style>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <nav
    className="navbar navbar-expand-lg navbar-light px-0"
    style={{backgroundColor: "#e1ceb2"}}
  >
    <div className="container-fluid">
      <div>
        <Link to='/'>
        <img src={logo} alt="Totus Logo" className="container-fluid" />
        </Link>
        </div>
      <div className="container col-md-0"></div>
      <div className="collapse navbar-collapse col-md-9" id="navbarNavDropdown">
        <ul className="navbar-nav menu">
          <li className="nav-item px-3">
           <Link to='/' className="nav-link px-3" style={{color: "#794245"}}>
              Productos
            </Link>
          </li>
          <li className="nav-item px-3">
          <Link to='/category/clasicas' className="nav-link px-3" style={{color: "#794245"}}>
              Clásicas
              </Link>
          </li>
          <li className="nav-item px-3">
          <Link to='/category/frutales' className="nav-link px-3" style={{color: "#794245"}}>
              Frutales
              </Link>
          </li>
          <li className="nav-item px-3">
          <Link to='/category/golosas' className="nav-link px-3" style={{color: "#794245"}}>
              Golosas
              </Link>
          </li>
          <li className="nav-item px-3">
          <Link to='/category/tematicas' className="nav-link px-3" style={{color: "#794245"}}>
              Temáticas
              </Link>
          </li>
          <li className="nav-item px-3">
          <Link to='/category/bocados' className="nav-link px-3" style={{color: "#794245"}}>
              Bocados
              </Link>
          </li>
          <li className="nav-item px-3">
          <Link to='/cart' className="nav-link px-3" style={{color: "#794245"}}>
              {total()}
              <CartWidget />
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


)




}

export default NavBar