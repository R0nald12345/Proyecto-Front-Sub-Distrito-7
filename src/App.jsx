import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./components/ProteccionRutas/AuthContext";
import PrivateRoute from "./components/ProteccionRutas/PrivateRoute";
import PublicRoute from "./components/ProteccionRutas/PublicRoute";
import { DataProvider } from "./context/DataProvider";

import Principal from "./components/ComponentsInitial/Principal";
import VentanaLogin from "../src/layout/FormularioLogin";
import MainBienvenida from "../src/components/ComponentsInitial/MainBienvenida";
import LayoutAdmin from "./layout/LayoutAdmin";
import Inicio from "./pages/Inicio/Inicio";
import CentroRecreativo from "./pages/CentrosRecreativos/CentroRecreativo";
import FormularioAgregarPublica from "./pages/UnidadesEducativas/Publico/FormularioAgregarPublica";
import FormDataPublica from "./pages/UnidadesEducativas/Publico/FormDataPublica";
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
import CentroPolicialGeneral from "./pages/CentroPolicial/CentroPolicialGeneral";
import CentroPolicial_Crear from "./pages/CentroPolicial/CentroPolicial_Crear";
import CentroPolicial_Detalles from "./pages/CentroPolicial/CentroPolicial_Detalles";
import Actualizar_UE from "./pages/UnidadesEducativas/FormAgregarNuevo/Actualizar_UE";
import ListaGeneralVisitas from "./pages/UnidadesEducativas/Visita/ListaGeneralVisitas";
import CentroSalud_Editar from "./pages/CentrosSalud/CentroSalud_Editar";
import OficinaDistritalGeneral from "./pages/OficinaDistrital/OficinaDistritalGeneral";
import CentroPolicial_Actualizar from "./pages/CentroPolicial/CentroPolicial_Actualizar";
import ListaGeneralUsuarios from "./pages/Usuarios/ListaGeneralUsuario";
import ActualizarCentroDeportivo from "./pages/CentroDeportivo/ActualizarCentroDeportivo";
import Modal_Actualizar_Turno from "./components/Modal/UnidadEducativa/Modal_Actualizar_Turno";
import Actualizar_CentroTuristicos from "./pages/CentroTuristicos/Actualizar_CentroTuristico";
import OficinaDistrital_Editar from "./pages/OficinaDistrital/OficinaDistrital_Editar";
import CentroSalud_EspecialidadGeneral from "./pages/CentrosSalud/CentroSalud_EspecialidadGeneral";
import CentroSalud_EncargadosEspecialidades from "./pages/CentrosSalud/CentroSalud_EncargadosEspecialidades";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Principal />}>
              <Route index element={<MainBienvenida />} />
              <Route
                path="auth"
                element={
                  <PublicRoute>
                    <VentanaLogin />
                  </PublicRoute>
                }
              />
            </Route>

            <Route
              path="/inicio"
              element={
                <PrivateRoute>
                  <LayoutAdmin />
                </PrivateRoute>
              }
            >
              <Route index element={<Inicio />} />
              <Route path="oficinadistrital" element={<OficinaDistritalGeneral />} />
              <Route path="telefonourgencia" element={<TelefonoUrgencia />} />
              <Route path="unidadeducativa" element={<ListaGeneralUE />} />
              <Route path="unidadeducativa/agregarnuevo" element={<FormAgregarUE />} />
              <Route path="unidadeducativa/detalles/:id" element={<FormDataPublica />} />
              <Route path="unidadeducativa/actualizar/:id" element={<Actualizar_UE />} />
              <Route path="unidadeducativa/modificar/:id" element={<FormEditarUE />} />
              <Route path="unidadeducativa/desayuno/:id" element={<Encabezado_Desayuno />} />
              <Route path="unidadeducativa/mantenimiento/:id" element={<Encabezado_Mantenimiento />} />
              <Route path="unidadeducativa/apoyo-gubernamental/:id" element={<Encabezado_ApoyoGubernamental />} />
              <Route path="unidadeducativa/apoyo-social/:id" element={<Encabezado_ApoyoSocial />} />
              <Route path="unidadeducativa/visitas/:id" element={<ListaGeneralVisitas />} />
              <Route path="centrosalud" element={<CentroSaludGeneral />} />
              <Route path="centrosalud/detalles/:id" element={<CentroSalud_Detalles />} />
              <Route path="centrosalud/agregarnuevo" element={<CentroSalud_Crear />} />
              <Route path="centrosalud/editar/:id" element={<CentroSalud_Editar />} />
              <Route path="centrosalud/especialidades/:id" element={<CentroSalud_EspecialidadGeneral />} />
              <Route path="centrosalud/encargados/:id" element={<CentroSalud_EncargadosEspecialidades />} />
              <Route path="centrorecreativo" element={<CentroRecreativo />} />
              <Route path="centro_turisticos" element={<ListaGeneralCentroTuristicos />} />
              <Route path="centro_turisticos/agregarnuevo" element={<AgregarCentroTuristicos />} />
              <Route path="centro_turisticos/detalles/:id" element={<DetallesCentroTuristicos />} />
              <Route path="centro_turisticos/actualizar/:id" element={<Actualizar_CentroTuristicos />} />
              <Route path="centro_deportivo" element={<ListaGeneralCentroDeportivo />} />
              <Route path="centro_deportivo/agregarnuevo" element={<AgregarCentroDeportivo />} />
              <Route path="centro_deportivo/detalles/:id" element={<DetallesCentroDeportivo />} />
              <Route path="centro_deportivo/actualizar/:id" element={<ActualizarCentroDeportivo />} />
              <Route path="centro_policial" element={<CentroPolicialGeneral />} />
              <Route path="centro_policial/agregarnuevo" element={<CentroPolicial_Crear />} />
              <Route path="centro_policial/detalles/:id" element={<CentroPolicial_Detalles />} />
              <Route path="centro_policial/actualizar/:id" element={<CentroPolicial_Actualizar />} />
              <Route path="servicioDistrital" element={<OficinaDistritalGeneral />} />
              <Route path="servicioDistrital/actualizar" element={<OficinaDistrital_Editar />} />
              <Route path="usuarios" element={<ListaGeneralUsuarios />} />
              <Route path="agregarUsuario" element={<NuevoUsuario />} />
            </Route>
            
            {/* Ruta catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;