
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
import CentroSalud from "./pages/CentrosSalud/CentroSalud";
import CentroRecreativo from "./pages/CentrosRecreativos/CentroRecreativo";
// import ListaGeneralPublica from "./pages/UnidadesEducativas/Publico/ListaGeneralPublica";
import FormularioAgregarPublica from "./pages/UnidadesEducativas/Publico/FormularioAgregarPublica";
// import ListaGeneralPrivada from "./pages/UnidadesEducativas/Privada/ListaGeneralPrivada";
// import FormularioAgregarPrivada from "./pages/UnidadesEducativas/Privada/FormularioAgregarPrivada";
import FormDataPublica from "./pages/UnidadesEducativas/Publico/FormDataPublica";
// import ListaGeneralConvenio from "./pages/UnidadesEducativas/Convenio/ListaGeneralConvenio";
import OficinaDistritalPrincipal from "./pages/OficinaDistrital/OficinaDistritalPrincipal";
import TelefonoUrgencia from "./pages/TelefonoUrgencia/TelefonoUrgencia";
import ListaGeneralUE from "./pages/UnidadesEducativas/Publico/ListaGeneralUE";
// import UnidadEducativa from "./pages/UnidadesEducativas/UnidadEducativa";
function App() {
 
  return(
      <>
        <Router> {/* Envuelve todo dentro del componente Router */}
          <Routes>
            <Route path="/inicio" element={<Principal/>}>
              <Route index element={<MainBienvenida/>} /> 
              <Route path="auth" element={<VentanaLogin/>} /> 
            </Route> 

            {/* Para Dashboard Completo */}
            <Route path="/" element={<LayoutAdmin/>} >
              <Route index element={<Inicio/>}/>

              {/* OficinaDistritalPrincipal */}
              <Route path="oficinadistrital" element={<OficinaDistritalPrincipal/>} />
            	

              {/* TelefonoUrgencia */}
              <Route path="telefonourgencia" element={<TelefonoUrgencia/>} />


              {/* Rutas de Unidades Educativas */}
              <Route path="unidadeducativa" element={<ListaGeneralUE/>} />
              <Route path="unidadeducativa/agregarnuevo" element={<FormularioAgregarPublica/>} />
             

              {/* <Route path="unidad/educativa/privada/agregarnuevo" element={<FormularioAgregarPrivada/>} /> */}

              <Route path="unidadeducativa/detalles" element={<FormDataPublica/>} />

              <Route path="centrosalud" element={<CentroSalud/>}/>
              <Route path="centrorecreativo" element={<CentroRecreativo/>}/>
              {/* <Route index element={Vena}/> */}

            </Route> 
              {/* <Route index element={<Principal/>} /> */}
          </Routes>
        </Router>
          
      </>
  )
}

export default App
