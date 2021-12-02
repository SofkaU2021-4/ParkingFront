import React from 'react'
import { deleteDb } from '../utils/Deletedb'
import { useConsulta } from '../context/ConsultaContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardsEgresados = ({item}) => {
    const {setConsulta}=useConsulta();

    return (
        <div className="ml-2 mt-7">
            <div className="flex flex-col w-64 shadow-md">
                <div className='bg-gray-200 w-full flex justify-between items-center'>
                    <span className=" text-center">Dueño : {item.dueno}</span>
                    <button onClick={()=>{
                        deleteDb(item.id,setConsulta,toast);
                    }} className=' self-center' ><i className=" fas fa-times mr-2 text-red-500 fa-sm item-center"></i></button>
                </div>
                <span className="bg-gray-100 w-full text-center text-4xl font-bold py-7">{item.placa}</span>
                <span className=" w-full ml-5 mt-5 text-gray-400">Fecha de ingreso : {item.fechaIngreso}</span>
                <span className=" w-full ml-5 text-gray-400 ">Hora de ingreso :  {item.horaIngreso}</span>
                <span className=" w-full ml-5 mt-5 text-gray-400">Fecha de salida : {item.fechaSalida}</span>
                <span className=" w-full ml-5 text-gray-400 ">Hora de salida :  {item.horaSalida}</span>
                <span className=" w-full mt-5 font-bold ml-5">Valor pagado : ${item.total!=null?item.total:""}</span>
                <div className="flex my-6 justify-between mx-6">
                </div>
            </div>
        </div>
    )
}

export default CardsEgresados
