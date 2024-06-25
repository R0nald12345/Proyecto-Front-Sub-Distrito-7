
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

// import CentroSalud from "./pages/CentrosSalud/CentroSalud";

import CentroSalud from "./pages/CentrosSalud/CentroSalud";

import CentroRecreativo from "./pages/CentrosRecreativos/CentroRecreativo";
import FormularioAgregarPublica from "./pages/UnidadesEducativas/Publico/FormularioAgregarPublica";
import FormDataPublica from "./pages/UnidadesEducativas/Publico/FormDataPublica";
import OficinaDistritalPrincipal from "./pages/OficinaDistrital/OficinaDistritalPrincipal";
import TelefonoUrgencia from "./pages/TelefonoUrgencia/TelefonoUrgencia";
import ListaGeneralUE from "./pages/UnidadesEducativas/Publico/ListaGeneralUE";
import FormAgregarUE from "./pages/UnidadesEducativas/FormAgregarNuevo/FormAgregarUE";
import FormEditarUE from "./pages/UnidadesEducativas/FormEditar/FormEditarUE";

import CentroSaludGeneral from "./pages/CentrosSalud/CentroSaludGeneral";
import Encabezado_ApoyoGubernamental from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_ApoyoGubernamental";
import Encabezado_Desayuno from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_Desayuno";
import Encabezado_Mantenimiento from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_Mantenimiento";
import Encabezado_ApoyoSocial from "./components/Encabezado_Listas/UnidadesEducativas/Encabezado_ApoyoSocial";

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
              <Route path="telefonourgencia" element={<TelefonoUrgencia/>}/>


              {/* Rutas de Unidades Educativas */}
              
              <Route path="unidadeducativa" element={<ListaGeneralUE/>} />


              {/* <Route path="unidadeducativa/agregarnuevo" element={<FormularioAgregarPublica/>} /> Formulario Antiguo*/}
              <Route path="unidadeducativa/agregarnuevo" element={<FormAgregarUE/>} />

              <Route path="unidadeducativa/detalles/:id" element={<FormDataPublica/>} />

              <Route path="unidadeducativa/desayuno/:id" element={<Encabezado_Desayuno/>} />
              <Route path="unidadeducativa/mantenimiento/:id" element={<Encabezado_Mantenimiento/>} />
              <Route path="unidadeducativa/apoyo-gubernamental/:id" element={<Encabezado_ApoyoGubernamental/>} />
              <Route path="unidadeducativa/apoyo-social/:id" element={<Encabezado_ApoyoSocial/>} />

              <Route path="unidadeducativa/modificar/:id" element={<FormEditarUE/>} />

              <Route path="centrosalud" element={<CentroSaludGeneral/>}/>
              <Route path="centrorecreativo" element={<CentroRecreativo/>}/>
            </Route>
              {/* <Route index element={<Principal/>} /> */}
          </Routes>
        </Router>

      </>
  )
}

export default App
