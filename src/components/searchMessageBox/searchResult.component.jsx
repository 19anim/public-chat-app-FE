const SearchResultComponent = ({ conversations, users }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {conversations.length > 0
        ? conversations.map((conversation) => {
            return (
              <div key={conversation._id} className="text-black  w-full h-fit">
                {conversation.conversationName}
              </div>
            );
          })
        : null}
      {users.length > 0
        ? users.map((user) => {
            return (
              <div key={user._id} className="text-black  w-full h-fit">
                {user.fullName}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SearchResultComponent;
