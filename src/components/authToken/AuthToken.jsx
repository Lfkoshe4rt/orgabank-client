import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/store";
import { useCajaActions } from "../../hooks/useCajaActions";
import { useUserActions } from "../../hooks/useUserActions";
let myTimer;

const AuthToken = ({ children }) => {
  const { token } = useAppSelector((state) => state.user);
  const { refreshUser } = useUserActions();
  const { refreshCaja } = useCajaActions();

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      myTimer = setTimeout(() => {
        refreshUser();
        refreshCaja();
        alert("Sesión expirada, por favor vuelva a iniciar sesión");
      }, decodedToken.exp * 1000 - Date.now());
    }

    if (!token) {
      clearTimeout(myTimer);
    }
  }, [token]);

  return children;
};

export default AuthToken;