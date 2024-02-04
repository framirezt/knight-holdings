"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authActions } from "@/store/reduxStore";
import { useDispatch, useSelector } from "react-redux";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const path = usePathname();

  const dispatch = useDispatch();

  const { token, tokenExpirationDate, loaded } = useSelector((s) => s.auth);

  // auto login
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      dispatch(
        authActions.login({
          user: storedData.user,
          token: storedData.token,
          expDate: storedData.expiration,
        })
      );
    }
  }, [dispatch]);

  // autologout
  useEffect(() => {
    let logoutTimer;
    if (!loaded) return;
    if (token && tokenExpirationDate) {
      const remainingTime =
        new Date(tokenExpirationDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(dispatch(authActions.logout()), remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [dispatch, loaded, token, tokenExpirationDate]);

  // redirect to login
  useEffect(() => {
    if (!token) {
      router.replace("/auth");
    } else if (path === "/auth" && token) {
      router.replace("/");
    }
  }, [token, router, path]);

  return <>{children}</>;
}
