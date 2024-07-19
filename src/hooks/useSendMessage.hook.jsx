import { useState } from "react";
import useConversation from "../zustand/useConversation.zustand";
import API from "../utils/apiEnum";

const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages } = useConversation();
  const sendMessage = async (receiverId, messageContent) => {
    setIsLoading(true);
    try {
      const res = await fetch(API.SEND_MESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          receiverId: [...receiverId],
          messageContent: messageContent,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendMessage };
};

export default useSendMessage;
