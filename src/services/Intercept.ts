const errorTokenResponse = "Expired credentials or not valid token";
export const seesionEnds = (msj: string) => {
  //   return msj == errorTokenResponse;
  if (msj == errorTokenResponse) window.location = "/auth/auth1/login" as any;
};
