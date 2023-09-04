import axios from "axios";
// import { redirect } from 'next/navigation';
// const API = "http://localhost:3000";
const API = process.env.NEXT_PUBLIC_API_URL;
// import { signIn, signOut } from "next-auth/react";

export const login = (values: any) => {
  // console.log(API, "api");

  return axios.post(`${API}/usc/cosmotologist/login`, {
    email: values.username,
    password: values.password,
  });
  // .then(function (response:any) {
  //   localStorage.setItem("token", response?.data?.token);
  //   localStorage.setItem("id", response?.data?.id);
  //   // redirect('/');
  //   // window.location = "/" as any;]
  //   console.log(response);
  //   return response
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   return error
  // });
};
