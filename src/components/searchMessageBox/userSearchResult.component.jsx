import { useAuthContext } from "../../context/auth.context";
import useGetAvatarAndName from "../../hooks/useGetAvatarAndName.hook";
import useHandleOnClickSearchRequest from "../../hooks/useHandleOnClickSearchMessage.hook";

const UserSearchResult = ({
  conversation,
  searchBoxResultRef,
  returnArrowRef,
}) => {
  const { authUser } = useAuthContext();
  const { avatar, conversationName } = useGetAvatarAndName(
    conversation,
    authUser
  );
  const { handleUserSearchOnClick } = useHandleOnClickSearchRequest();
  const handleOnClick = () => {
    handleUserSearchOnClick(conversation._id);
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

export default UserSearchResult;
