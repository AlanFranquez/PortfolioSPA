import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/Home"
            >
                Portfolio
            </Link>


            <div className="navbar-collapse">
                <div className="container navbar-nav">

                    <NavLink 
                        className={(activo) => {
                            return `nav-item nav-link ${(activo.isActive) ? 'active' : null}`; 
                        }
                    }
                        to="/Home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            return `nav-item nav-link ${(isActive) ? 'active' : null}`
                        }}
                        to="/About"
                    >
                        About
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            return `nav-item nav-link ${(isActive) ? 'active' : null}`
                        }}
                        to="/ProyectosUX"
                    >
                        UX
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            return `nav-item nav-link ${(isActive) ? 'active' : null}`
                        }}
                        to="/ProyectosDev"
                    >
                        DEV
                    </NavLink>
                </div>
            </div>

            <div className="button-nav navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                

                    <a target="_blank" href={"/assets/Alan CV.pdf"} className="cv">
                        <button className='nav-item nav-link btn btn-secondary download-button'>
                        ??Descargar cv!
                    </button>

                    </a>
                    
                    

                </ul>
            </div>
        </nav>


  )
}
