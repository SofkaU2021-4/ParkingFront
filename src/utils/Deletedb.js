import axios from "axios";

export const deleteDb = (id) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:8080/api/vehiculo/${id}`,
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
