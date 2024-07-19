import useConversation from "../zustand/useConversation.zustand";
import API from "../utils/apiEnum";
import { useState, useEffect } from "react";

const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedConversation, setMessages, messages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${API.GET_MESSAGES}/${selectedConversation._id}`
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data.messages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, isLoading };
};

export default useGetMessages;
