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

export const getPatients = ():any => {
  axios
    .get(`${API}/usc/patient/retrieve`)
    .then(function (response) {
      console.log(response.data.result);
      return response.data.result;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};
