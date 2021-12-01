import axios from "axios";

export const getDb = (setVehiculos, setConsulta) => {
  const options = { method: "GET", url: "http://localhost:8080/api/vehiculo" };
  axios
    .request(options)
    .then(function (response) {
      setVehiculos(response.data);
      setConsulta(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};
