import SearchMessageBox from "../components/searchMessageBox/searchMessageBox.component";
import ConversationsList from "../components/conversationsList/coversationsList.component";
import MessagePanel from "../components/messagePanel/messagePanel.component";
import { useSocketContext } from "../context/socket.context";

const HomePage = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-[360px_1fr]">
      <div className="flex flex-col">
        <h3 className="text-[20px] pt-3 pb-3 pl-3 border border-l-0 border-b-0 border-[#414141]">
          Chat App <span className=" text-blue-500">JAGERTHEJAGER</span>
        </h3>
        <SearchMessageBox />
        <ConversationsList />
        <div className="h-[60px] flex items-center justify-center border border-l-0 border-b-0 border-[#414141]">
          Developed by JAGERTHEJAGER
        </div>
      </div>
      <MessagePanel />
    </div>
  );
};

export default HomePage;
