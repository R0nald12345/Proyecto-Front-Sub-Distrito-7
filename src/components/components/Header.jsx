import { Link } from "react-router-dom";

import { IoNotifications } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";

import { BiSolidLike } from "react-icons/bi"; //1:56:18

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header = () => {
  return (
    <header className=" h-[7vh] md:h-[10vh] border-b border-gray-600 border-secondary-100 p-8 flex items-center justify-end bg-gray-300/70">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <IoNotifications />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          arrow={true}
          // arrowClassName ="bg-secondary-100"
          align="end"
          transition
          menuClassName={"bg-secondary-100 p-4"}
        >
          <h1 className="text-gray-900 text-center font-medium">
            Notificaciones (3)
          </h1>
          <hr className="my-6 border-gray-800" />

          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              to={"/"}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-primary-100 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2021</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Ronald Camino ah comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              to={"/"}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-primary-100 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2021</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Ronald Camino ah comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              to={"/"}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-primary-100 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2021</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Ronald Camino ah comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>

          <hr className="my-6 border-gray-800" />

          <MenuItem
            className={
              "p-0 hover:bg-transparent flex justify-center cursor-default"
            }
          >
            <Link
              to={"/"}
              className="text-gray-800 text-sm font-semibold transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>

        {/* Esta parte es la seeccion del NOmbre y foto del usuario */}
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100  p-2 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-joven-feliz-camisa-blanca_171337-17462.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <span>Ing Peinado</span>
              <FaAngleDown />
            </MenuButton>
          }
          arrow={true}
          // arrowClassName = "bg-secondary-100"
          align="end"
          transition
          menuClassName={"bg-white p-4"}
        >
          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              className="rounded-lg transition-colors hover:bg-primary-100/90 flex items-center gap-x-4 py-2 px-6 flex-1"
              to="/perfil"
            >
              <img
                src="https://img.freepik.com/foto-gratis/retrato-joven-feliz-camisa-blanca_171337-17462.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-sm font-semibold">Ing Peiando</span>
                <span className="text-xs text-gray-800 font-semibold">
                  despeinado@gmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-700" />
          <MenuItem className={"p-0 hover:bg-transparent"}>
            <Link
              className="rounded-lg transition-colors hover:text-gray-300 hover:bg-gray-500 flex items-center gap-x-4 py-2 px-6 flex-1"
              to="/configuracion"
            >
              <IoMdSettings /> Configuracion
            </Link>
          </MenuItem>

          <MenuItem className={"p-0 hover:transparent font-bold"}>
            <Link
              className="rounded-lg transition-colors hover:text-white hover:bg-red-500/80 flex items-center gap-x-4 py-2 px-6 flex-1"
              to="/configuracion"
            >
              <RiLogoutCircleRLine className="text-red-600" />
              <p className="text-red-600 font-sem hover:text-white">
                Cerrar Sesion
              </p>
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
