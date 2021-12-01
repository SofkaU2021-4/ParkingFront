import React, { useEffect } from 'react'
import Cards from '../components/Cards'
import {getDb}from "../utils/Getdb"
import { useConsulta } from '../context/ConsultaContext'
import { useBuscado } from '../context/BusquedaContext'

const Actuales = () => {
    const {consulta ,setConsulta, setVehiculos,vehiculos}=useConsulta();
    const {busqueda}=useBuscado();

    useEffect(()=>{
        if (consulta) {
            getDb(setVehiculos,setConsulta);
        }
    },[consulta])

    return (
        <div className= "mx-auto max-w-screen-xl flex flex-wrap justify-evenly   ">
        {vehiculos.map((item)=>{
            if (item.placa.toUpperCase().includes(busqueda)|| item.dueno.toUpperCase().includes(busqueda)) {
                return (<Cards key={item.id}  item={item} />)
            }
            return null;
        })}
        </div>
    )
}

export default Actuales
