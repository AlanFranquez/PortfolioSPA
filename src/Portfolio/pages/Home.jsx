import { Footer } from "../UI/components/Footer"


export const Home = () => {
  return (

    <>
    
    <header className="container">

        

        <div className="introduccion container justify-content-center">
            <p className="text-center">¡Bienvenido a mi portfolio! 🍜</p>
            <h1 className="text-center introduccion__titulo animate__animated animate__fadeInRight">Hola, soy Alan Fránquez. <span className="fw-bold">Desarollador Web y Diseñador UX/UI</span></h1>

            <div className="animate__animated animate__fadeInLeft">
              <p className="introduccion__detalles text-center animate__animated animate__fadeInLeft">Soy apasionado por la tecnología, diseño y el aprendizaje. Constantemente estoy adquiriendo nuevas habilidades, me dedico principalmente a la creación de paginas web y a todo el campo que involucra el campo de la experiencia de usuario, estoy capacitado para cubrir el área de Research, Writing y Maquetado (UI).</p>

              <p className="introduccion__detalles text-center">Si estás interesado en trabajar conmigo, por favor no dudes en contactarme.</p>
            </div>
            

            <div className="d-flex mt-5 introduccion_redes">
              <a href="https://github.com/AlanFranquez" target='_blank'>
                <div className="mx-2 introduccion__redes_logos">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#111111" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </div>
              </a>

              <a href="https://www.behance.net/AlanFranquez" target='_blank'>
                <div className="mx-2 introduccion__redes_logos">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-behance" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#111111" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                  <line x1="3" y1="12" x2="7.5" y2="12" />
                  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                  <line x1="16" y1="6" x2="19" y2="6" />
                </svg>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/alanfranquez/">
                <div className="mx-2 introduccion__redes_logos">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#111111" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </a>
              <div className="mx-2 introduccion__redes_logos">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#111111" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
              </div>
              
              
            </div>
        </div>


    </header>

    <Footer />
    
    </>


    
  )
}
