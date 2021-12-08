import logo from './logo.svg';
import './App.css';

function App2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        {/* <!-- Navigation--> */}
        <a className="navbar-brand" href="#page-top">Aquamaná</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/news.html">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/news.html#projects"
                >Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-primary btn-sm text-uppercase"
                href="./pages/login.html"
                >Login</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App2;
