import logo from './Images/logototus-ppal.png';
import CartWidget from './CartWidget.js' 


const NavBar = () => {

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
      <a className="navbar-brand col-md-2" href="#top">
        <img src={logo} alt="Totus Logo" className="container-fluid" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container col-md-1"></div>
      <div className="collapse navbar-collapse col-md-9" id="navbarNavDropdown">
        <ul className="navbar-nav menu">
          <li className="nav-item px-3">
            <a
              className="nav-link px-3"
              aria-current="page"
              id="color"
              href="../index.html"
            >
              Productos
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link px-3" href="productos.html" id="color">
              {" "}Clásicas{" "}
            </a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link px-3" href="recetas.html" id="color">
              {" "} Frutales{" "}
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              className="nav-link px-3"
              href="../index.html#sobretotus"
              id="color"
            >
              Golosas
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              className="nav-link px-3"
              href="../index.html#contacto"
              id="color"
            >
              Temáticas
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              className="nav-link px-3"
              a=""
              href="../Catalogo_Totus_2022.pdf"
              download="Catálogo Totus"
              id="color"
            >
              Bocados
            </a>
          </li>
         <CartWidget />

        </ul>
      </div>
    </div>
  </nav>
</header>


)




}

export default NavBar