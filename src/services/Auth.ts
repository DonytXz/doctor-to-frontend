import axios from "axios";
// import { redirect } from 'next/navigation';
const API = "http://localhost:3000";
// import { signIn, signOut } from "next-auth/react";

export const login = (values: any) => {
  axios
    .post(`${API}/usc/cosmotologist/login`, { email: values.username, password: values.password })
    .then(function (response:any) {
      localStorage.setItem("token", response?.token);
      localStorage.setItem("id", response?.id);
      // redirect('/');
      window.location = "/" as any;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
};