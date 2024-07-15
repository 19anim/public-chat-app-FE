import useGetMessages from "../../hooks/useGetMessages.hook";
import { useAuthContext } from "../../context/auth.context";
import useConversation from "../../zustand/useConversation.zustand";
import SenderMessage from "../message/senderMessage.component";
import ReceiverMessage from "../message/receiverMessage.component";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";

const MessageContainer = () => {
  const { isLoading, messages } = useGetMessages();
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const { avatar } = useGetAvatarAndName(selectedConversation, authUser);
  return (
    <div className="flex-[1_1_0] flex flex-col pt-3">
      {isLoading
        ? "LOADING MESSAGES"
        : messages.map((message, index) => {
            let fromMe = authUser._id === message.senderId;
            if (index > 0) {
              console.log("Last message", messages[index - 1]);
              console.log("Latest message", message);
              let lastMessageFromMe =
                authUser._id === messages[index - 1].senderId;
            }
            return fromMe ? (
              <SenderMessage
                key={message._id}
                message={message}
                avatar={avatar}
              />
            ) : (
              <ReceiverMessage
                key={message._id}
                message={message}
                avatar={avatar}
              />
            );
          })}
    </div>
  );
};

export default MessageContainer;
