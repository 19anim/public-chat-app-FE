import { useState } from "react";
import API from "../utils/apiEnum";
import { useAuthContext } from "../context/auth.context";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuthUser } = useAuthContext();

  const login = async (loginInfo) => {
    setIsLoading(true);
    console.log(API.LOGIN);
    setErrorMessage("");
    try {
      const res = await fetch(API.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: loginInfo.username,
          password: loginInfo.password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, errorMessage, isLoading };
};

export default useLogin;
