import axios from "axios";

export const editarDb = (item, id, toast) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:8080/api/vehiculo",
    headers: { "Content-Type": "application/json" },
    data: { id: id, placa: item.placa.toUpperCase(), dueno: item.dueno },
  };

  axios
    .request(options)
    .then(function (response) {
      toast.success("Actualizacion con exito", {
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
      toast.error("Error!! No Se Actualizo", {
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
