import useConversation from "../../zustand/useConversation.zustand";
import { useAuthContext } from "../../context/auth.context";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";

const Conversation = ({ finalMessage, conversation }) => {
  const { setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const { avatar, conversationName } = useGetAvatarAndName(
    conversation,
    authUser
  );

  return (
    conversation && (
      <div
        onClick={() => setSelectedConversation(conversation)}
        className="flex items-center hover:bg-[#ffffff40] rounded-lg px-2"
      >
        <img className="h-[60px]" src={avatar} alt="avatar" />
        <div className="w-full text-[15px]">
          <h2>{conversationName}</h2>
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
