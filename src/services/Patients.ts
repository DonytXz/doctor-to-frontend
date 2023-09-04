import axios from "axios";
import { Patient } from "src/types/patients/Patient";
// const API = "http://localhost:3000";
import { seesionEnds } from "./Intercept";
import { useDispatch } from "react-redux";

const API = process.env.NEXT_PUBLIC_API_URL;

export const storePatient = async (patient: Patient | object) => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  try {
    const response = await axios.post(
      `${API}/usc/patient/create`,
      patient,
      config
    );
    return response.data;
    // console.log(response);
  } catch (error: any) {
    console.error(error, "erorrrrrrr");
    // seesionEnds(error?.response?.data?.error as string);
  }
  // return axios.post(`${API}/usc/patient/create`, patient, config);
};

export const updatePatient = async (
  patient: Patient | object,
  idPatient: string
) => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  try {
    const response = await axios.put(
      `${API}/usc/patient/update/:${idPatient}`,
      patient,
      config
    );
    return response.data;
    // console.log(response);
  } catch (error: any) {
    console.error(error, "erorrrrrrr");
    // seesionEnds(error?.response?.data?.error as string);
  }
  // return axios.post(`${API}/usc/patient/create`, patient, config);
};

export const deletePatient = async (idPatient: any) => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  try {
    const response = await axios.delete(
      `${API}/usc/patient/update/:${idPatient}`,
      config
    );
    return response;
    // console.log(response);
  } catch (error: any) {
    console.error(error, "erorrrrrrr");
    return error;
    // seesionEnds(error?.response?.data?.error as string);
  }
  // return axios.post(`${API}/usc/patient/create`, patient, config);
};
export const getPatients = async () => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  // console.log(API, "api");
  try {
    const response = await axios.get(`${API}/usc/patient/retrieve`, config);
    return response.data;
    // console.log(response);
  } catch (error: any) {
    // console.error(error, "erorrrrrrr");
    seesionEnds(error?.response?.data?.error as string);
    // return response
  }
};
