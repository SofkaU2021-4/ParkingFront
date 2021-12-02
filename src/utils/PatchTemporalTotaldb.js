import axios from "axios";

export const PatchTemporalTotaldb = (item, setConsulta, toast) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:8080/api/vehiculo/temporal",
    headers: { "Content-Type": "application/json" },
    data: item,
  };

  axios
    .request(options)
    .then(function (response) {
      setConsulta(true);
      toast.success("Calculo con Exito", {
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
      toast.error("Error!! No Se Calculo", {
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
