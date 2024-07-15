import { useEffect, useState } from "react";
import API from "../utils/apiEnum";

const useGetConversations = () => {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchConversations = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API.GET_CONVERSATIONS);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversations();
  }, []);
  return { isLoading, conversations };
};

export default useGetConversations;
