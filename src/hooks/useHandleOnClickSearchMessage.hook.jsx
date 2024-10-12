import API from "../utils/apiEnum";
import useConversation from "../zustand/useConversation.zustand";
import useSearchConversation from "../zustand/useSearchConversation.zustand";

const useHandleOnClickSearchRequest = () => {
  const { CREATE_SINGLE_CONVERSATION, QUERY_TWO_USERS_CONVERSATION } = API;
  const { setSelectedConversation } = useConversation();
  const { setSearchResult } = useSearchConversation();

  const createNewConversation = async (receiverId) => {
    try {
      const res = await fetch(
        `${CREATE_SINGLE_CONVERSATION}?receiverId=${receiverId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            receiverId: receiverId,
          }),
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUserSearchOnClick = async (receiverId) => {
    try {
      const res = await fetch(
        `${QUERY_TWO_USERS_CONVERSATION}?receiverId=${receiverId}`
      );
      const data = await res.json();
      const conversationExists = data.length > 0 ? true : false;
      if (!conversationExists) {
        const returnedConversation = await createNewConversation(receiverId);
        setSelectedConversation(returnedConversation);
        setSearchResult(returnedConversation);
      } else {
        setSelectedConversation(data[0]);
        setSearchResult(data[0]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return { handleUserSearchOnClick };
};

export default useHandleOnClickSearchRequest;
