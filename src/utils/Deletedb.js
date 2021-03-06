import axios from "axios";

export const deleteDb = (id, setConsulta, toast) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:8080/api/vehiculo/${id}`,
  };

  axios
    .request(options)
    .then(function (response) {
      setConsulta(true);
      toast.success("Borrado con Exito", {
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
      toast.error("Error!! No se pudo Borrar", {
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
