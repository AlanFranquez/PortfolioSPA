

export const ProyectosUX = () => {
  return (

      <div className="container">
      <div className="proyectosux__texto">
        <h2 className="about__titulo text-center">Proyectos UX</h2>
        <p className="text-center proyectosux__p">Algunos de mis proyectos más destacados dentro del ambito UX</p>
      </div>

      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-7 animate__animated animate__fadeInLeft">
          <h4 className="proyectos__titulo">Rediseño Cartelera de Espéctaculos</h4>
          <p className="categoria"><b>UX / UI Avanzado</b></p>

          <p className="categoria__texto">
            Estuve varios meses trabajando en el rediseño de la cartelera de espectaculos de la ciudad de Trinidad. La misma necesitaba un rediseño urgente ya que tenía numerosos problemas de usabilidad y de diseño. <br></br>
            En el proyecto abarque todas las etapas de la Experiencia de Usuario, desde el research, hasta el maquetado final. Culminando con un proyecto donde todas las decisiónes de diseño pudierón ser justificadas correctamente.
          </p>

          <a href="https://www.behance.net/gallery/150703515/Rediseno-de-la-cartelera-de-Espectaculos-UXUI-Avanzado" target="_blank">
            <button>
              VER PROYECTO COMPLETO
            </button>
          </a>
          
        </div>
        <div className="col-md-5 animate__animated animate__fadeInRight">
          <img className="proyectosux__img" src={"/assets/1.png"} alt="" />
        </div>
      </div>


      <div className="row mt-5 justify-content-center align-items-center">

        <div className="col-md-5 animate__animated animate__fadeInLeft">
          <img className="proyectosux__img" src={"/assets/2.png"} alt="" />
        </div>

        <div className="col-md-7 animate__animated animate__fadeInRight">
          <h4 className="proyectos__titulo">RICO</h4>
          <p className="categoria"><b>UX Writing</b></p>

          <p className="categoria__texto">
            Un proyecto dedicado completamente al UX Writing, donde la principal función del mismo fue reconocer al publico objetivo y en base a eso escribir el tono que tendría el contenido respectivo. Fue un proyecto muy fructifero ya que me enseño a de que forma tratar el contenido, como escribir correctamente según el tono que la app requiera en diferentes momentos y crear una propuesta atractiva para los usuarios.
          </p>

          <a href="https://www.behance.net/gallery/143133879/UX-Writing-RICO" target="_blank">
            <button>
              VER PROYECTO COMPLETO
            </button>
          </a>
        </div>
        
      </div>


      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-7 animate__animated animate__fadeInLeft">
          <h4 className="proyectos__titulo">CourseLine App</h4>
          <p className="categoria"><b>UX / UI</b></p>

          <p className="categoria__texto">
            Proyecto donde propuse la creación de una app que democratizara la educación uruguaya. El objetivo principal de la misma era permitir que todos los uruguayos, indpendientemente de su situación, tuvieran la posibilidad de formarse en lo que prefirierán. En este proyecto abarque todas las diferentes áreas que posee el campo UX; Research, Writing y UI. Todo fue correctamente justificado.
          </p>

          <a href="https://www.behance.net/gallery/150703515/Rediseno-de-la-cartelera-de-Espectaculos-UXUI-Avanzado" target="_blank">
            <button>
              VER PROYECTO COMPLETO
            </button>
          </a>
        </div>
        <div className="col-md-5 animate__animated animate__fadeInRight">
          <img className="proyectosux__img" src={"/assets/3.png"} alt="" />
        </div>
      </div>
      </div>
      
      
    
  )
}
