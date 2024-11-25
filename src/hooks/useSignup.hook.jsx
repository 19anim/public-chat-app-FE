import { useState } from "react";
import API from "../utils/apiEnum";
import { useAuthContext } from "../context/auth.context";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuthUser } = useAuthContext();

  const signup = async (signupInfo) => {
    const { username, email, password, confirmPassword, fullName, gender } =
      signupInfo;
    setIsLoading(true);
    setErrorMessage("");
    try {
      if (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        fullName === "" ||
        gender === ""
      ) {
        setErrorMessage("Please input all user information");
      } else {
        const res = await fetch(API.SIGNUP, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            fullName: fullName,
            gender: gender,
          }),
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, errorMessage, isLoading };
};

export default useSignup;
