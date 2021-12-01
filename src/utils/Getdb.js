import axios from "axios";

export const getDb = (setVehiculos) => {
  const options = { method: "GET", url: "http://localhost:8080/api/vehiculo" };
  axios
    .request(options)
    .then(function (response) {
      setVehiculos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
