import React from 'react'
import logo from'../media/parking-02.png'
import { useBuscado } from '../context/BusquedaContext'
import ModalNuevoVehiculo from './ModalNuevoVehiculo'

const NavBar = () => {

    const {setBusqueda}=useBuscado()

    return (
    <div>
        <div className="flex flex-col  bg-gray-200 shadow-sm">
            <div className="flex justify-between max-w-screen-xl mx-auto  w-full">
                <img className=" self-start w-72" src={logo}/>
                <div className="flex self-center  text-xl  " >
                    <span className=" text-gray-400">#</span>
                    <span className=" ml-2 bg-white w-8 text-center font-bold shadow-xs">30</span>
                </div>
            </div>
        </div>
        <div className="flex mx-auto max-w-screen-xl my-10  justify-between flex-wrap">
            <div className=" flex flex-wrap">
                <div className= "flex bg-white border-2 border-gray-400 ml-2"  >
                    <i className="  self-center fas fa-search text-gray-500 pl-4 mr-3"></i>
                    <input onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar" className= " self-center outline-none w-96 h-9 rounded-xl" type="text"/>
                </div>
                <button className=" bg-gray-400 text-white px-6">Actuales</button>
                <button className=" bg-gray-400 text-white px-6 ">Egresados</button>
            </div>
            <ModalNuevoVehiculo/>
        </div>
        <div className=" shadow-inner"></div>
    </div>
    )
}

export default NavBar
