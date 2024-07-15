import Conversation from "../conversation/conversation.component";
import useGetConversations from "../../hooks/useGetConversations.hook";

const ConversationsList = () => {
  const { isLoading, conversations } = useGetConversations();
  return (
    <div className="overflow-y-auto flex-[1_1_0] pt-3 px-3 border border-l-0 border-b-0 border-[#414141]">
      {!isLoading
        ? conversations.map((conversation) => {
            return (
              <Conversation
                key={conversation._id}
                conversation={conversation}
                finalMessage={{
                  message: "Hi",
                  time: "1h",
                }}
              />
            );
          })
        : "Loading"}
    </div>
  );
};

export default ConversationsList;
