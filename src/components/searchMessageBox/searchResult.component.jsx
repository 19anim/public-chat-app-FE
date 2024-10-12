import UserSearchResult from "./userSearchResult.component";
import ConversationSearchResult from "./conversationSearchResult.component";

const SearchResultComponent = ({
  conversations,
  users,
  searchBoxResultRef,
  returnArrowRef,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {conversations.length > 0
        ? conversations.map((conversation) => {
            return (
              <ConversationSearchResult
                key={conversation._id}
                conversation={conversation}
                searchBoxResultRef={searchBoxResultRef}
                returnArrowRef={returnArrowRef}
              />
            );
          })
        : null}
      {users.length > 0
        ? users.map((user) => {
            return (
              <UserSearchResult
                key={user._id}
                conversation={user}
                searchBoxResultRef={searchBoxResultRef}
                returnArrowRef={returnArrowRef}
              />
            );
          })
        : null}
    </div>
  );
};

export default SearchResultComponent;
