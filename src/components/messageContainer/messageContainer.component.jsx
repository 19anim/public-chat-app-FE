import useGetMessages from "../../hooks/useGetMessages.hook";
import { useAuthContext } from "../../context/auth.context";
import SenderMessage from "../message/senderMessage.component";
import ReceiverMessage from "../message/receiverMessage.component";
import MessageSkeleton from "../skeletons/messageSkeleton.component";
import useListenMessage from "../../hooks/useListenMessage.hook";
import { useRef, useEffect } from "react";

const MessageContainer = () => {
  const { isLoading, messages } = useGetMessages();
  const { authUser } = useAuthContext();
  const lastMessageRef = useRef();
  useListenMessage();

  useEffect(() => {
    const scrollToBottomTimeout = setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => {
      clearTimeout(scrollToBottomTimeout);
    };
  }, [messages]);

  return (
    <div className="flex-[1_1_0] flex flex-col pt-3 gap-1 overflow-auto">
      {isLoading ? (
        <MessageSkeleton />
      ) : (
        messages.map((message, index) => {
          let fromMe = authUser._id === message.senderId._id;
          let isContinuousMessage = false;
          if (
            index > 0 &&
            message.senderId._id === messages[index - 1].senderId._id
          ) {
            isContinuousMessage = true;
          }
          return fromMe ? (
            <div
              className="self-end flex items-center max-w-[70%] mr-3"
              key={message._id}
              ref={lastMessageRef}
            >
              <SenderMessage
                message={message}
                avatar={message.senderId.profilePic}
                isContinuousMessage={isContinuousMessage}
              />
            </div>
          ) : (
            <div
              className="self-start flex items-center w-[70%] ml-3"
              key={message._id}
              ref={lastMessageRef}
            >
              <ReceiverMessage
                message={message}
                avatar={message.senderId.profilePic}
                isContinuousMessage={isContinuousMessage}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default MessageContainer;
