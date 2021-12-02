import './css/global.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './layout/Layout';
import { useState } from 'react';
import { BusquedaContext } from './context/BusquedaContext';
import { ConsultaContext } from './context/ConsultaContext';
import Actuales from './page/Actuales';
import Egresados from './page/Egresados';

function App() {
  const [vehiculos ,setVehiculos]=useState([]);
  const [busqueda,setBusqueda]=useState('')
  const [consulta ,setConsulta]=useState(true);
  const [cantidad, setCantidad] = useState(0);

  return (
    <BusquedaContext.Provider value={{busqueda,setBusqueda}}>
      <ConsultaContext.Provider value={{consulta ,setConsulta,vehiculos ,setVehiculos,cantidad, setCantidad}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='' element={<Actuales/>}/>
              <Route path='egresados' element={<Egresados/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ConsultaContext.Provider>
    </BusquedaContext.Provider>
  );
}

export default App;
