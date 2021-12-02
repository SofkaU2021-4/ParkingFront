import React, { useEffect } from 'react'
import CardsEgresados from '../components/CardsEgresados'
import {getDb}from "../utils/Getdb"
import { useConsulta } from '../context/ConsultaContext'
import { useBuscado } from '../context/BusquedaContext'

const Egresados = () => {
    const {consulta ,setConsulta, setVehiculos,vehiculos,setCantidad}=useConsulta();
    const {busqueda}=useBuscado();

    useEffect(()=>{
        if (consulta) {
            getDb(setVehiculos,setConsulta);
        }

        let contador=0;
        vehiculos.map((item)=>{
        if (!item.estado) {
            contador++;
        }
        })
        setCantidad(contador)
    },[consulta])

  return (
      <div className= "mx-auto max-w-screen-xl flex flex-wrap justify-evenly   ">
        {vehiculos.map((item)=>{
            if (!item.estado) {
                if (item.placa.toUpperCase().includes(busqueda)|| item.dueno.toUpperCase().includes(busqueda)) {
                return (<CardsEgresados key={item.id}  item={item} />)
                }
            }
            return null;
        })}
        </div>
  )
};

export default Egresados;