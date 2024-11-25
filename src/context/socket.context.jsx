import { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./auth.context";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const URL =
    import.meta.env.VITE_ENVIRONMENT === "DEV"
      ? "http://localhost:5000"
      : "https://public-chat-app-be.onrender.com";
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io(URL, {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket?.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
