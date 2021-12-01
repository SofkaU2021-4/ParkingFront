import axios from "axios";

export const editarDb = (item, id) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:8080/api/vehiculo",
    headers: { "Content-Type": "application/json" },
    data: { id: id, placa: item.placa, dueno: item.dueno },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
