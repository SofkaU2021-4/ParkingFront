import React from 'react'
import { deleteDb } from '../utils/Deletedb'
import { PatchTotaldb } from '../utils/PatchTotaldb'
import { PatchSalida } from '../utils/PatchSalida'
import { useConsulta } from '../context/ConsultaContext'
import ModalEditarVehiculo from './ModalEditarVehiculo'

const Cards = ({item}) => {
    const {setConsulta}=useConsulta();
    return (
        <div className="ml-2 mt-7">
            <div className="flex flex-col w-64 shadow-md">
                <div className='bg-gray-200 w-full flex justify-between items-center'>
                    <ModalEditarVehiculo item={item}/>
                    <span className=" text-center">Dueño : {item.dueno}</span>
                    <button onClick={()=>{
                        deleteDb(item.id);
                        setConsulta(true);
                    }} className=' self-center' ><i className=" fas fa-times mr-2 text-red-500 fa-sm item-center"></i></button>
                </div>
                <span className="bg-gray-100 w-full text-center text-4xl font-bold py-7">{item.placa}</span>
                <span className=" w-full ml-5 mt-5 text-gray-400">Fecha de ingreso : {item.fechaIngreso}</span>
                <span className=" w-full ml-5 text-gray-400 ">Hora de ingreso :  {item.horaIngreso}</span>
                <span className=" w-full mt-5 font-bold ml-5">Total a pagar : ${item.total!=null?item.total:""}</span>
                <div className="flex my-6 justify-between mx-6">
                <button className ="bg-green-500 text-white py-2 px-3"
                onClick={()=>{
                    PatchTotaldb(item);
                    setConsulta(true);
                }}>Calcular</button>
                <button className ="bg-red-500 text-white py-2 px-2" 
                onClick={()=>{
                    PatchSalida(item);
                    setConsulta(true);
                }}>Dar salida</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
