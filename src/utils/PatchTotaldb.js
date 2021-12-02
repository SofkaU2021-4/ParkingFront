import axios from "axios";

export const PatchTotaldb = (item) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:8080/api/vehiculo/valor",
    headers: { "Content-Type": "application/json" },
    data: item,
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
