import axios from "axios";

export const getDb = (setVehiculos, setConsulta, toast) => {
  const options = { method: "GET", url: "http://localhost:8080/api/vehiculo" };
  axios
    .request(options)
    .then(function (response) {
      setVehiculos(response.data);
      setConsulta(false);
    })
    .catch(function (error) {
      toast.error("Error!! Servidor Caido", {
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
