/* @ts-ignore */
import Cookies from "js-cookie";

export const getSessionToken = () => {
  const sessionToken = Cookies.get("SafetySession") ?? "";
  return sessionToken;
};

export const setSessionToken = (token: string) => {
  Cookies.set("SafetySession", token, {
    expires: 1,
  });
};

export const removeSessionToken = () => {
  Cookies.remove("SafetySession");
};
