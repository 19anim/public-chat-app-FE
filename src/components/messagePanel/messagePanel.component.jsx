import RecipientHeader from "../recipientHeader/recipientHeader.component";
import MessageContainer from "../messageContainer/messageContainer.component";
import useConversation from "../../zustand/useConversation.zustand";
import NoChatSelected from "../noChatSelected/noChatSelected.component";
import { useAuthContext } from "../../context/auth.context";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";

const MessagePanel = () => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const { avatar, conversationName } = useGetAvatarAndName(
    selectedConversation,
    authUser
  );

  return (
    <div className="flex flex-col">
      {selectedConversation ? (
        <>
          <RecipientHeader avatar={avatar} recipientName={conversationName} />
          <MessageContainer />
          <div className="h-[60px] bg-mainDark flex items-center">
            <input
              className="w-full mx-3 px-3 py-1 rounded-[50px] bg-mainDark border border-[#414141] outline-none"
              type="text"
              placeholder="Aa"
            />
          </div>
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessagePanel;
