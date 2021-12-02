import axios from "axios";

export const postDb = (formData, toast) => {
  const options = {
    method: "POST",
    url: "http://localhost:8080/api/vehiculo",
    headers: { "Content-Type": "application/json" },
    data: { dueno: formData.dueno, placa: formData.placa.toUpperCase() },
  };

  axios
    .request(options)
    .then(function (response) {
      toast.success("Creado Correctamente", {
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
      toast.error("Error!! Placa Ya Existente", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(error);
    });
};
