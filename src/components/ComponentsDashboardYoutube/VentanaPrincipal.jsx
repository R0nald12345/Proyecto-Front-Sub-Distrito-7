import Header from "../ComponentsDashboard/Header"
import Sidebar from "../ComponentsDashboard/Sidebar"
import { RiLineChartLine } from "react-icons/ri";
import { AiFillEuroCircle } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";

import {Outlet} from 'react-router-dom'


const VentanaPrincipal = () => {
    return(
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar/>
            <main className="lg:col-span-3 xl:col-span-5 bg-gray-200 p-8 h-[100vh] overflow-y-scroll">
              <Header/>
              {/* Seccion 1 */}
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
                {/* Card 1 */}
                <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
                  <RiLineChartLine className="text-7xl"/>
                  <h4 className="text-3xl">Inversión en Colegios y Modulos</h4>
                    {/* <AiFillEuroCircle/> 8,350 */}
                    <span className="text-5xl text-white">&euro; 8,350</span>
                    <span className="py-1 px-3 bg-primary-900/50 rounded-full">+10% desde mes pasado</span>
                </div>
                {/* Card 2 */}
                <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
                  
                  <div className="flex items-center gap-4 bg-primary-100/30 rounded-xl p-4">
                    <span className=" bg-primary-100  text-gray-300 text-2xl font-semibold p-4 rounded-xl">98</span>
                    <div>
                      <h3 className="font-bold">Escuela</h3>
                      <p className="text-gray-500 font-semibold">Nro Total Alumnos</p>
                    </div>
                  </div>
    
                  <div className=" bg-primary-100/30 rounded-xl p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className=" bg-primary-100  text-gray-300 text-2xl font-semibold p-4 rounded-xl">32</span>
                      <div>
                        <h3 className="font-bold">Modulos</h3>
                        <p className="text-gray-500 font-semibold">Nro Total Alumnos</p>
                      </div>
                    </div>
                      <div className="flex items-center gap-3 text-gray-600 font-semibold text-sm">
                        <span className="bg-primary-100/50 py-1 px-4 rounded-full">Mobile app</span>
                        <span className="bg-primary-100/50 py-1 px-4 rounded-full">branding</span>
                      </div>
                  </div>
    
                </div>
                {/* Card 3 */}
                <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                  <h1 className="text-2xl font-bold mb-8">Tipos de Colegios</h1>
                  <div className="bg-white p-8  rounded-xl shadow-2xl">
    
                      <div className="flex items-center gap-4 mb-12">
                          <img src="https://i.pinimg.com/564x/7c/55/6d/7c556d7dd22cfbfc2dbf24612513bcab.jpg"
                                className="w-14 h-14 object-cover rounded-full"
                          />
                          <div>
                            <h3 className="font-bold">at ullam et moles</h3>
                            <p className="text-gray-500">Modulo</p>
                          </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                          <img src="https://img.freepik.com/vector-premium/edificio-escuela-dibujos-animados-aislado-patio-verde_29190-1888.jpg"
                                className="w-14 h-14 object-cover rounded-full"
                          />
                          <div>
                            <h3 className="font-bold"> at ullam et moles</h3>
                            <p className="text-gray-500">Escuela</p>
                          </div>
                      </div>
                      <div className="flex justify-end">
                          <a href="#" className="hover:text-primary-300 transition-colors hover:underline">Ver mas detalles</a>
                      </div>
                  
                  </div>
                </div>
              </section>
    
              {/* section 2 */}
              <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
                  <div >
                    <h1 className="text-2xl font-bold mb-8">Nombre de los Directores</h1>
                 
                    <div className="bg-white p-8 rounded-xl shadow-2xl mb-8">
                         {/* Card 1 */}
                        <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                            <div className="col-span-2 flex items-center gap-4">
                              <img src="https://img.freepik.com/foto-gratis/joven-barbudo-camiseta-blanca_273609-7198.jpg"
                                        className="w-14 h-14 object-cover rounded-xl"
                              />
                              <div>
                                <h3 className="font-bold">Ronald Camino Puma</h3>
                                <p className="text-gray-500">Nombre del Colegio</p>
                              </div>
                            </div>
                            <div>
                              <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-semibold">Paid</span>
                            </div>
                            <div>
                              <span className="font-bold">$euro; 1,200.87</span>
                            </div>
                        </div>
                          {/* Card 2 */}
                        <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                            <div className="col-span-2 flex items-center gap-4">
                              <img src="https://img.freepik.com/foto-gratis/joven-barbudo-camiseta-blanca_273609-7198.jpg"
                                        className="w-14 h-14 object-cover rounded-xl"
                              />
                              <div>
                                <h3 className="font-bold">Ronald Camino Puma</h3>
                                <p className="text-gray-500">Nombre del Colegio</p>
                              </div>
                            </div>
                            <div>
                              <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-semibold">late</span>
                            </div>
                            <div>
                              <span className="font-bold">$euro; 12,989.98</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap  gap-8">
                        <div>
                            <FaHashtag  className="text-4xl -rotate-12"/>
                        </div>
                        <div>
                          <h5 className="font-bold text-white">Enviar Mensajes a Todos </h5>
                          <p>Directores</p>
                        </div>
                        <div className="w-full xl:w-auto">
                          <button className="bg-primary-100 py-2 px-6 rounded-xl text-white border border-white w-full">Realizar</button>
                        </div>
                    </div>
    
                  </div>
    
                  <div>
                    <h1 className="text-2xl font-bold mb-8">Reclamos</h1>
                    <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 gap-4">
                      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <img src="https://img.freepik.com/fotos-premium/joven-brasilena-aislada-fondo-blanco-pensando-idea-mientras-mira-arriba_1368-360228.jpg"
                                  className="w-14 h-14 object-cover rounded-full"
                            />
                            <div>
                              <h3 className="font-bold">Thomas Martin</h3>
                              <p className="text-gray-500">Update 10am ago</p>
                            </div>
                        </div>
                        <span className="bg-primary-100 py-2 px-4 text-white rounded-full text-center">
                          Revisar
                        </span>
                      </div>
                      
                      <div className="mb-6">
                          <h5 className="text-lg font-bold">Nedd a dessigner to form branding essentials for my bussiness. (Titulo del Problema)</h5>
                          <p className="text-gray-500">Looking for a talented brad designer to create all the
                             breading materials for my startup (Descripción del Problema)
                          </p>
    
                      </div>
    
                      <div className="bg-primary-100/10 flex flex-col items-center md:flex-row justify-between gap-4 py-8 px-4 rounded-lg">
                          <div>
                              <sup className="text-sm text-gray-500">&euro;</sup> {" "}
                              <span className="text-2xl font-bold mr-2">8,700</span>
                              <span className="text-sm text-gray-500">/moth</span>
                          </div>
    
                          <div>
                              <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">Full time</span>
                          </div>
                      </div>
    
                    </div>
                  </div>
              </section>
    
    
            </main>
            <Outlet/>
        </div>
  )
}

export default VentanaPrincipal
