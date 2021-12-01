import './css/global.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './layout/Layout';
import { useState } from 'react';
import { BusquedaContext } from './context/BusquedaContext';
import { ConsultaContext } from './context/ConsultaContext';
import Actuales from './page/Actuales';

function App() {
  const [vehiculos ,setVehiculos]=useState([]);
  const [busqueda,setBusqueda]=useState('')
  const [consulta ,setConsulta]=useState(true);

  return (
    <BusquedaContext.Provider value={{busqueda,setBusqueda}}>
      <ConsultaContext.Provider value={{consulta ,setConsulta,vehiculos ,setVehiculos}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='' element={<Actuales/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ConsultaContext.Provider>
    </BusquedaContext.Provider>
  );
}

export default App;
