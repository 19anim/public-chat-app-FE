import useConversation from "../../zustand/useConversation.zustand";
import { useAuthContext } from "../../context/auth.context";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";

const ConversationSearchResult = ({
  conversation,
  searchBoxResultRef,
  returnArrowRef,
}) => {
  const { setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const { avatar, conversationName } = useGetAvatarAndName(
    conversation,
    authUser
  );
  const handleOnClick = () => {
    setSelectedConversation(conversation);
    returnArrowRef.current.className = "hidden";
    searchBoxResultRef.current.className = "hidden";
  };
  return (
    <div
      onClick={handleOnClick}
      className="rounded-[15px] flex items-center hover:bg-[#ffffff40] hover:cursor-pointer px-2"
    >
      <img className="h-[60px]" src={avatar} alt="avatar" />
      <div className="w-full text-[15px]">{conversationName}</div>
    </div>
  );
};

export default ConversationSearchResult;
