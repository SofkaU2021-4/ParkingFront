import './css/global.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './layout/Layout';
import { useState } from 'react';
import { BusquedaContext } from './context/BusquedaContext';

function App() {

  const [busqueda,setBusqueda]=useState('')

  return (
    <BusquedaContext.Provider value={{busqueda,setBusqueda}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<h1></h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </BusquedaContext.Provider>
  );
}

export default App;
