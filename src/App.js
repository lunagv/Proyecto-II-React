import './App.css';
import './bootstrap.min.css';
import Hero from "./componentes/hero";

function App() {
  return (
   <><nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='inicio'> Nawi</a>
        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='home'> Home
                <span className='visually-hidden'>(Current) </span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='home'>Servicios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav><div>
        <Hero />
      </div></>
   
  );
}

export default App;
