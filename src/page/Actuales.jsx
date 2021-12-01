import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import {getDb}from "../utils/Getdb"


const Actuales = () => {
    const [vehiculos ,setVehiculos]=useState([]);

    useEffect(()=>{
        getDb(setVehiculos);
    },[])


    return (
        <div className= "mx-auto max-w-screen-xl flex flex-wrap justify-between   ">

        {vehiculos.map((item)=>{
            return (<Cards item={item}/>)
        })}
        </div>
        
    )
}

export default Actuales
