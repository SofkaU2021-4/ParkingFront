import { createContext, useContext } from "react";

export const BusquedaContext = createContext(null);

export const useBuscado = () => {
  return useContext(BusquedaContext);
};
