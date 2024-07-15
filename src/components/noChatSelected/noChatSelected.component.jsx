import { useAuthContext } from "../../context/auth.context";
import useLogout from "../../hooks/useLogout.hook";

const NoChatSelected = () => {
  const { logout } = useLogout();
  const { authUser } = useAuthContext();
  return (
    <div className="flex-[0_0_100%] flex flex-col items-center justify-center">
      <div
        className="hover:cursor-pointer flex justify-center items-center fixed top-5 right-5"
        onClick={logout}
      >
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
      <h3 className="text-[25px] text-center">
        Welcome to the Chat App{" "}
        <span className="text-blue-500">JAGERTHEJAGER</span>,{" "}
        {authUser.fullName}
      </h3>
      <h3 className="text-[25px] text-center">Please select a chat to start</h3>
      <div className="text-[70px]">
        <ion-icon name="chatbubbles-outline"></ion-icon>
      </div>
    </div>
  );
};

export default NoChatSelected;
