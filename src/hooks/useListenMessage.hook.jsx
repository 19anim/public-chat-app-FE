import { useEffect } from "react";
import { useSocketContext } from "../context/socket.context";
import useConversation from "../zustand/useConversation.zustand";

const useListenMessage = () => {
  const { messages, setMessages } = useConversation();
  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessages");
  }, [socket, messages, setMessages]);
};

export default useListenMessage;
