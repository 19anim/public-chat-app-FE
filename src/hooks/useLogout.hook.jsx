import API from "../utils/apiEnum";
import { useAuthContext } from "../context/auth.context";
import useConversation from "../zustand/useConversation.zustand";

const useLogout = () => {
  const { setSelectedConversation } = useConversation();
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    try {
      const res = await fetch(API.LOGOUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      setSelectedConversation(null);
    } catch (error) {
      console.error(error.message);
    }
  };
  return { logout };
};

export default useLogout;
