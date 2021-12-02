import axios from "axios";

export const PatchSalida = (item, setConsulta, toast) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:8080/api/vehiculo/salida",
    headers: { "Content-Type": "application/json" },
    data: item,
  };

  axios
    .request(options)
    .then(function (response) {
      setConsulta(true);
      toast.success("Salida Exito", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(function (error) {
      toast.error("Error!! No Se Pudo dar salida", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
