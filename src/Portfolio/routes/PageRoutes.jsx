import { Route, Routes } from "react-router-dom"
import { AboutMe, Home, ProyectosDev, ProyectosUX } from "../pages"
import { Navbar } from "../UI/components/Navbar"


export const PageRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">

            <Routes>
                <Route path="About" element={<AboutMe />}/>

                <Route path="/Home" element={<Home />}/>
                <Route path="/" element={<Home />}/>

                {/* <Route path="/*" element={<Home />}/> */}
                <Route path="/ProyectosDev" element={<ProyectosDev />}/>
                <Route path="/ProyectosUX" element={<ProyectosUX />}/>




            </Routes>

        </div>
    
    </>
  )
}
