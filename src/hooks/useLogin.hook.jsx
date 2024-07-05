import { useState } from "react";
import API from "../utils/apiEnum";

const UseLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginInfo) => {
    setIsLoading(true);
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
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export default UseLogin;
