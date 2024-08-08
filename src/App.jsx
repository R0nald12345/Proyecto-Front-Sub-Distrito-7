
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import {AuthProvider} from './components/ProteccionRutas/AuthContext';
import PrivateRoute from './components/ProteccionRutas/PrivateRoute';

import Principal from "./components/ComponentsInitial/Principal";
import VentanaLogin from "../src/layout/FormularioLogin";
import Dashboard from "./components/ComponentDashboardOficial/Dashboard";

import MainBienvenida from '../src/components/ComponentsInitial/MainBienvenida'
import LayoutAdmin from "./layout/LayoutAdmin";
import Inicio from "./pages/Inicio/Inicio";

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
import ListaGeneralCentroTuristicos from "./pages/CentroTuristicos/ListaGeneralCentroTuristicos";
import AgregarCentroTuristicos from "./pages/CentroTuristicos/AgregarCentroTuristicos";
import ListaGeneralCentroDeportivo from "./pages/CentroDeportivo/ListaGeneralCentroDeportivo";
import AgregarCentroDeportivo from "./pages/CentroDeportivo/AgregarCentroDeportivo";
import DetallesCentroDeportivo from "./pages/CentroDeportivo/DetallesCentroDeportivo";
import NuevoUsuario from "./pages/AgregarUsuario/NuevoUsuario";
import DetallesCentroTuristicos from "./pages/CentroTuristicos/DetallesCentroTuristicos";
import CentroSalud_Crear from "./pages/CentrosSalud/CentroSalud_Crear";
import CentroSalud_Detalles from "./pages/CentrosSalud/CentroSalud_Detalles";

// import UnidadEducativa from "./pages/UnidadesEducativas/UnidadEducativa";
function App() {

  return(
      <AuthProvider>
        <Router> {/* Envuelve todo dentro del componente Router */}
          <Routes>
            <Route path="/" element={<Principal/>}>
              <Route index element={<MainBienvenida/>} />
              <Route path="auth" element={<VentanaLogin/> } />
            </Route>

            {/* Para Dashboard Completo */}
            <Route path="/inicio" element={
              <PrivateRoute>
                <LayoutAdmin/>
              </PrivateRoute>
              } >
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

              <Route path="unidadeducativa/modificar/:id" element={<FormEditarUE/>} />


              <Route path="unidadeducativa/desayuno/:id" element={<Encabezado_Desayuno/>} />

              <Route path="unidadeducativa/mantenimiento/:id" element={<Encabezado_Mantenimiento/>} />

              <Route path="unidadeducativa/apoyo-gubernamental/:id" element={<Encabezado_ApoyoGubernamental/>} />
              
              <Route path="unidadeducativa/apoyo-social/:id" element={<Encabezado_ApoyoSocial/>} />



              <Route path="centrosalud" element={<CentroSaludGeneral/>}/>
              <Route path="centrosalud/agregarnuevo" element={<CentroSalud_Crear/>}/>
              <Route path="centrosalud/detalles/:id" element={<CentroSalud_Detalles/>}/>

              <Route path="centrorecreativo" element={<CentroRecreativo/>}/>
              

              <Route path="centro_turisticos" element={<ListaGeneralCentroTuristicos/>}/>
              <Route path="centro_turisticos/agregarnuevo" element={<AgregarCentroTuristicos/>}/>
              <Route path="centro_turisticos/detalles/:id" element={<DetallesCentroTuristicos/>}/>

              <Route path="centro_deportivo" element={<ListaGeneralCentroDeportivo/>}/>
              <Route path="centro_deportivo/agregarnuevo" element={<AgregarCentroDeportivo/>}/>
              <Route path="centro_deportivo/detalles/:id" element={<DetallesCentroDeportivo/>}/>
              <Route path="agregarUsuario" element={<NuevoUsuario/>}/>
              {/* <Route path="centro_turisticos/agregarnuevo" element={<AgregarCentroTuristicos/>}/> */}
            </Route>
              {/* <Route index element={<Principal/>} /> */}
          </Routes>
        </Router>

      </AuthProvider>
  )
}

export default App
