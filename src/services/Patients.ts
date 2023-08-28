import axios from "axios";
import { Patient } from "src/types/patients/Patient";
const API = "http://localhost:3000";

export const storePatient = (patient: Patient | object) => {
  axios
    .post(`${API}/usc/patient/create`, patient)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export async function getPatients() {
//   try {
//     const response = await axios.get(`${API}/usc/patient/retrieve`);
//     console.log(response, "response");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

export const getPatients = async () => {  
  try {
    const response = await axios.get(`${API}/usc/patient/retrieve`);
    return response.data;
    // console.log(response);
  } catch (error) {
    // console.error(error);
  }
  // axios
  //   .get(`${API}/usc/patient/retrieve`)
  //   .then(function (response) {
  //     console.log(response, "response");
  //     return response.data.result;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     return error;
  //   });
};
