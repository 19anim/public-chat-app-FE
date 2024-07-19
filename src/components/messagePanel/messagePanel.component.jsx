import RecipientHeader from "../recipientHeader/recipientHeader.component";
import MessageContainer from "../messageContainer/messageContainer.component";
import useConversation from "../../zustand/useConversation.zustand";
import NoChatSelected from "../noChatSelected/noChatSelected.component";
import { useAuthContext } from "../../context/auth.context";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";
import useSendMessage from "../../hooks/useSendMessage.hook";
import LoadingSpinner from "../loading_spinner/loadingSpinner.component";
import { useState } from "react";

const MessagePanel = () => {
  const [messageContent, setMessageContent] = useState("");
  const { selectedConversation } = useConversation();
  const { isLoading, sendMessage } = useSendMessage();
  const { authUser } = useAuthContext();
  const receivers = selectedConversation?.participantId.filter(
    (participant) => participant._id !== authUser._id
  );
  const receiverId = receivers?.map((receiver) => receiver._id);
  const { avatar, conversationName } = useGetAvatarAndName(
    selectedConversation,
    authUser
  );

  const changeEventHandler = (event) => {
    const { value } = event.target;
    setMessageContent(value);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (!messageContent) return;
    sendMessage(receiverId, messageContent);
    setMessageContent("");
  };

  return (
    <div className="flex flex-col">
      {selectedConversation ? (
        <>
          <RecipientHeader avatar={avatar} recipientName={conversationName} />
          <MessageContainer />
          <form
            className="h-[60px] bg-mainDark flex items-center px-3"
            onSubmit={sendMessageHandler}
          >
            <input
              className="w-full mx-3 px-3 py-1 rounded-[50px] bg-mainDark border border-[#414141] outline-none"
              type="text"
              placeholder="Aa"
              value={messageContent}
              onChange={changeEventHandler}
            />
            <button type="submit" className="text-[20px] hover:cursor-pointer">
              {isLoading ? (
                <LoadingSpinner size="s" />
              ) : (
                <ion-icon name="rocket-outline"></ion-icon>
              )}
            </button>
          </form>
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessagePanel;
