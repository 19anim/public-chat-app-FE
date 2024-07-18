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
    <div className="flex-[1_1_0] flex flex-col pt-3 gap-1">
      {isLoading
        ? "LOADING MESSAGES"
        : messages.map((message, index) => {
            let fromMe = authUser._id === message.senderId._id;
            let isContinuousMessage = false;
            if (
              index > 0 &&
              message.senderId._id === messages[index - 1].senderId._id
            ) {
              isContinuousMessage = true;
            }
            return fromMe ? (
              <SenderMessage
                key={message._id}
                message={message}
                avatar={message.senderId.profilePic}
                isContinuousMessage={isContinuousMessage}
              />
            ) : (
              <ReceiverMessage
                key={message._id}
                message={message}
                avatar={message.senderId.profilePic}
                isContinuousMessage={isContinuousMessage}
              />
            );
          })}
    </div>
  );
};

export default MessageContainer;
