import axios from "axios";
import { Patient } from "src/types/patients/Patient";
// const API = "http://localhost:3000";
const API = process.env.NEXT_PUBLIC_API_URL;

export const storePatient = (patient: Patient | object) => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  axios
    .post(`${API}/usc/patient/create`, patient, config)
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
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  console.log(API, "api");
  try {
    const response = await axios.get(`${API}/usc/patient/retrieve`, config);
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
