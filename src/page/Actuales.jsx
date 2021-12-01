import React, { useEffect } from 'react'
import Cards from '../components/Cards'
import {getDb}from "../utils/Getdb"
import { useConsulta } from '../context/ConsultaContext'

const Actuales = () => {
    const {consulta ,setConsulta, setVehiculos,vehiculos}=useConsulta();

    useEffect(()=>{
        if (consulta) {
            getDb(setVehiculos,setConsulta);
        }
    },[consulta])

    return (
        <div className= "mx-auto max-w-screen-xl flex flex-wrap justify-between   ">
        {vehiculos.map((item)=>{
            return (<Cards key={item.id}  item={item} />)
        })}
        </div>
    )
}

export default Actuales
