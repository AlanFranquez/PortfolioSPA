import { Footer } from "../UI/components/Footer"


export const ProyectosDev = () => {
  return (
    <div className="container dev">
      <div className="proyectosux__texto">
        <h2 className="about__titulo text-center">Proyectos de Desarollo</h2>
        <p className="text-center proyectosux__p">Algunos de mis proyectos más destacados dentro del ambito DEV</p>
      </div>

      


      <div className="row mt-5 justify-content-center align-items-center">

        <div className="col-md-5 animate__animated animate__fadeInLeft">
          <img className="proyectosux__img" src={"/assets/dev3.png"} alt="" />
        </div>

        <div className="col-md-7 animate__animated animate__fadeInRight">
          <h4 className="proyectos__titulo">Heroes App</h4>
          <p className="categoria"><b>React JS</b></p>

          <p className="categoria__texto">
            Proyecto SPA (Single Page Aplicaction). Una mini wiki de superheroes de Marvel y DC. Donde se trabajó el sistema de logueo y busqueda de superheroes.
          </p>

          <a href="https://heroesappalan.netlify.app/login" target="_blank">
            <button>
              VER PROYECTO COMPLETO
            </button>
          </a>
        </div>
        
      </div>

      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-7 animate__animated animate__fadeInLeft">
          <h4 className="proyectos__titulo">Banco de imagenes con Pixabay</h4>
          <p className="categoria"><b>Javacript</b></p>

          <p className="categoria__texto">
          Realice un banco de imágenes con la api de pixabay. En el mismo se pueden buscar todos tipos de imágenes y se desplegarán diferentes imágenes junto a sus visualizaciones y likes
          </p>

          <a href="https://bancoimagenespixabayreact.netlify.app/" target="_blank">
            <button>
              VER PROYECTO COMPLETO
            </button>
          </a>
          
        </div>
        <div className="col-md-5 animate__animated animate__fadeInRight">
          <img className="proyectosux__img" src={"/assets/dev1.png"} alt="" />
        </div>
      </div>


      <div className="row mt-5 justify-content-center align-items-center">
      <div className="col-md-5 animate__animated animate__fadeInRight">
          <img className="proyectosux__img" src={"/assets/dev2.png"} alt="" />
        </div>
        <div className="col-md-7 animate__animated animate__fadeInLeft">
          <h4 className="proyectos__titulo">Cotizador de Criptomonedas</h4>
          <p className="categoria"><b>JavaScript</b></p>

          <p className="categoria__texto">
            Realice un proyecto donde se consume una Api. El funcionamiento del proyecto es poder ver los distintos valores que cada moneda tiene en relación con diferentes criptomonedas, además también se pueden visualizar otros datos útiles.
          </p>

          <a href="https://giphyappreact.netlify.app/" target="_blank">
            <button>
              VER PROYECTO COMPLETO
            </button>
          </a>
        </div>
        
      </div>
      </div>
  )
}
