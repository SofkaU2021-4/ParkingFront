import React from 'react'

const Cards = ({item}) => {
    return (
        <div className="ml-2 mt-7">

            <div className="flex flex-col w-64 shadow-md">
                <span className="bg-gray-200 w-full text-center">Dueño : {item.dueno}</span>
                <span className="bg-gray-100 w-full text-center text-4xl font-bold py-7">{item.placa}</span>
                <span className=" w-full ml-5 mt-5 text-gray-400">Fecha de ingreso : {item.fechaIngreso}</span>
                <span className=" w-full ml-5 text-gray-400 ">Hora de ingreso :  {item.horaIngreso}</span>
                <span className=" w-full mt-5 font-bold ml-5">Total a pagar :  20000$</span>
                <div className="flex my-6 justify-between mx-6">
                <button className ="bg-green-500 text-white py-2 px-3">Calcular</button>  
                <button className ="bg-red-500 text-white py-2 px-2" >Dar salida</button>      
                </div>
            </div>
        
          
        </div>
    )
}

export default Cards
