import './App.css';
import './bootstrap.min.css';
import Hero from "./componentes/hero";
import Section1 from "./componentes/section-1";
import Servicios from "./componentes/servicios";
import Actividades from './componentes/actividades';

function App() {
  return (
   <><nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='inicio'> Nawi</a>
        <div className='collapse navbar-collapse d-flex justify-content-center' id='navbarColor01'>
          <ul className='navbar-nav me-auto '>
            <li className='nav-item'>
              <a className='nav-link active' href='#'> Inicio
                <span className='visually-hidden'>(Current) </span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Sobre nosotros
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Servicios
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Actividades
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Contacto
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-light">Reservar</button> 
        </div>
      </div>
    </nav><div>
        <Hero />
        <Section1 />
        <Servicios />
        <Actividades />

      </div></>
   
  );
}

export default App;
