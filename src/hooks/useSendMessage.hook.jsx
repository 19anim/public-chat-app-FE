import API from "../utils/apiEnum";

const useSendMessage = () => {
  const sendMessage = async (receiverId, messageContent) => {
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
    } catch (error) {
      console.error(error.message);
    }
  };

  return { sendMessage };
};

export default useSendMessage;
