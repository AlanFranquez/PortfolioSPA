

export const AboutMe = () => {
  return (
    <div className="container">
<div className="row justify-content-center align-items-center about">
      <div className="col-md-6 animate__animated animate__fadeInLeft">
        <h2 className="mb-4 about__titulo">Sobre mí</h2>
                <p>
                    Soy un chico de 21 años. Actualmente estudio la carrera de diseño UX/UI y poseo una diplomatura en desarollo web, actualmente sigo formandome en ambas areas para poder dar lo mejor de mi. Poseo varios conocimientos tanto en el area de programación como en la de diseño de experiencia de usuario. Siempre intento estar actualizado con las ultimas tecnologías y tendencías del área, soy consciente de que el area TI es un lugar en el cual el aprendizaje constante es clave, por lo tanto dedico todos los días una numerosa cantidad de hora a mis estudios.
                </p> 
                    
                    
                <p>
                    Siempre intento priorizar lo colectivo por encima de individual, considero que la mejor manera de lograr algo es en equipo. 
                </p>

                <p>Poseo un buen nivel de ingles y trabajo principalmente con la metodología de Design Thinking y SCRUM.</p>

      </div>


      <div className="col-md-6 animate__animated animate__fadeInRight">
          <img src={'/assets/wireframes.png'} alt="proyecto-imagen" />
      </div>
    </div>
    </div>
    
  )
}
