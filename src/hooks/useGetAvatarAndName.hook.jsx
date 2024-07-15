const useGetAvatarAndName = (conversation, authUser) => {
  let avatar = "";
  let conversationName = "";

  let filteredParticipant = conversation?.participantId.filter(
    (participant) => participant._id !== authUser._id
  );
  if (conversation?.participantId.length === 2) {
    avatar = filteredParticipant[0].profilePic;
    conversationName = filteredParticipant[0].fullName;
  }
  if (conversation?.participantId.length > 2) {
    avatar = filteredParticipant[0].profilePic;
    conversationName = conversation.conversationName;
  }

  return { avatar, conversationName };
};

export default useGetAvatarAndName;
