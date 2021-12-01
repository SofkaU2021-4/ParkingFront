import axios from "axios";

export const postDb = (formData) => {
  console.log(formData);
  const options = {
    method: "POST",
    url: "http://localhost:8080/api/vehiculo",
    headers: { "Content-Type": "application/json" },
    data: { dueno: formData.dueno, placa: formData.placa },
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
