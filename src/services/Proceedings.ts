import axios from "axios";
import { Patient } from "src/types/patients/Patient";
// const API = "http://localhost:3000";
const API = process.env.NEXT_PUBLIC_API_URL;

export const storeProcedding = (proceding: any) => {
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
    .post(`${API}/usc/expedient/create`, proceding, config)
    .then(function (response) {
      console.log(response);
    //   window.location = "/patients/list" as any;
    })
    .catch(function (error) {
      console.log(error);
    });
};
