import useConversation from "../../zustand/useConversation.zustand";
import { useAuthContext } from "../../context/auth.context";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";
import { useSocketContext } from "../../context/socket.context";

const Conversation = ({ finalMessage, conversation }) => {
  const { setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const { avatar, conversationName } = useGetAvatarAndName(
    conversation,
    authUser
  );
  const { onlineUsers } = useSocketContext();
  const receiverIds = conversation.participantId.filter((participantId) => {
    return participantId._id !== authUser._id;
  });
  const isOnline = receiverIds.some((receiverId) => {
    return onlineUsers.includes(receiverId._id);
  });

  return (
    conversation && (
      <div
        onClick={() => setSelectedConversation(conversation)}
        className="flex items-center hover:bg-[#ffffff40] rounded-lg px-2"
      >
        <img className="h-[60px]" src={avatar} alt="avatar" />
        <div className="w-full text-[15px]">
          <div className="flex items-center gap-2">
            <h2>{conversationName}</h2>
            {isOnline ? (
              <span className="w-[10px] h-[10px] block bg-green-600 rounded-[50%]"></span>
            ) : (
              ""
            )}
          </div>
          <div className="w-full flex justify-between">
            <p>{finalMessage.message} </p>
            <p>{finalMessage.time}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Conversation;
