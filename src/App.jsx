
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
// import VentanaPrincipal from "./components/ComponentsDashboard/VentanaPrincipal";
import Principal from "./components/ComponentsInitial/Principal";
// import Login from "./components/ComponentsLogin/FormularioLogin";
import VentanaLogin from "../src/layout/FormularioLogin";
import Dashboard from "./components/ComponentDashboardOficial/Dashboard";

import MainBienvenida from '../src/components/ComponentsInitial/MainBienvenida'
import LayoutAdmin from "./layout/LayoutAdmin";
import Inicio from "./pages/Inicio/Inicio";
// import EducativaPublica from "./pages/UnidadesEducativas/Publico/EducativaPublica";
// import EducativaPrivada from "./pages/UnidadesEducativas/Privada/EducativaPrivada";
<<<<<<< HEAD
// import CentroSalud from "./pages/CentrosSalud/CentroSalud";
=======
import CentroSalud from "./pages/CentrosSalud/CentroSalud";
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
import CentroRecreativo from "./pages/CentrosRecreativos/CentroRecreativo";
import FormularioAgregarPublica from "./pages/UnidadesEducativas/Publico/FormularioAgregarPublica";
import FormDataPublica from "./pages/UnidadesEducativas/Publico/FormDataPublica";
import OficinaDistritalPrincipal from "./pages/OficinaDistrital/OficinaDistritalPrincipal";
import TelefonoUrgencia from "./pages/TelefonoUrgencia/TelefonoUrgencia";
import ListaGeneralUE from "./pages/UnidadesEducativas/Publico/ListaGeneralUE";
import FormAgregarUE from "./pages/UnidadesEducativas/FormAgregarNuevo/FormAgregarUE";
import FormEditarUE from "./pages/UnidadesEducativas/FormEditar/FormEditarUE";
import FormDataPublicaExtra from "./pages/UnidadesEducativas/Publico/FormDataPublicaExtra";
<<<<<<< HEAD
import CentroSaludGeneral from "./pages/CentrosSalud/CentroSaludGeneral";
=======
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
// import UnidadEducativa from "./pages/UnidadesEducativas/UnidadEducativa";
function App() {
 
  return(
      <>
        <Router> {/* Envuelve todo dentro del componente Router */}
          <Routes>
<<<<<<< HEAD
            
            <Route path="/inicio" element={<Principal/>}>
              <Route index element={<MainBienvenida/>} /> 
              <Route path="auth" element={<VentanaLogin/>} /> 
            </Route>
            
=======
            <Route path="/inicio" element={<Principal/>}>
              <Route index element={<MainBienvenida/>} /> 
              <Route path="auth" element={<VentanaLogin/>} /> 
            </Route> 
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
            {/* Para Dashboard Completo */}
            <Route path="/" element={<LayoutAdmin/>} >
              <Route index element={<Inicio/>}/>

              {/* OficinaDistritalPrincipal */}
              <Route path="oficinadistrital" element={<OficinaDistritalPrincipal/>} />

              {/* TelefonoUrgencia */}
<<<<<<< HEAD
              <Route path="telefonourgencia" element={<TelefonoUrgencia/>}/>

=======
              <Route path="telefonourgencia" element={<TelefonoUrgencia/>} />
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999

              {/* Rutas de Unidades Educativas */}
              <Route path="unidadeducativa" element={<ListaGeneralUE/>} />

<<<<<<< HEAD

              {/* <Route path="unidadeducativa/agregarnuevo" element={<FormularioAgregarPublica/>} /> Formulario Antiguo*/}
              <Route path="unidadeducativa/agregarnuevo" element={<FormAgregarUE/>} />
             
=======
              {/* <Route path="unidadeducativa/agregarnuevo" element={<FormularioAgregarPublica/>} /> Formulario Antiguo*/}
              <Route path="unidadeducativa/agregarnuevo" element={<FormAgregarUE/>} />
             

>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
              <Route path="unidadeducativa/detalles/:id" element={<FormDataPublica/>} />
              <Route path="unidadeducativa/masdetalles/:id" element={<FormDataPublicaExtra/>} />
              <Route path="unidadeducativa/modificar/:id" element={<FormEditarUE/>} />

<<<<<<< HEAD
              <Route path="centrosalud" element={<CentroSaludGeneral/>}/>
=======
              <Route path="centrosalud" element={<CentroSalud/>}/>
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
              <Route path="centrorecreativo" element={<CentroRecreativo/>}/>
              
              {/* <Route index element={Vena}/> */}

<<<<<<< HEAD

            </Route> 

              {/* <Route index element={<Principal/>} /> */}

=======
            </Route> 
              {/* <Route index element={<Principal/>} /> */}
>>>>>>> 89dd2e3cdb5e5ae54d807149a70d02891a8f2999
          </Routes>
        </Router>
          
      </>
  )
}

export default App
