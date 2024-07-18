import React from "react";
import useLogout from "../../hooks/useLogout.hook";

const RecipientHeader = ({ avatar, recipientName }) => {
  const { logout } = useLogout();
  return (
    <div className="flex justify-between h-[60px] items-center border border-[#414141] border-l-0 border-r-0 px-3 pt-3">
      <div className="flex items-center">
        <img className="h-[40px]" src={avatar} alt="avatar" />
        <h3 className="text-[15px]">{recipientName}</h3>
      </div>
      <div className="text-blue-500 text-[20px] flex items-center gap-2 h-[40px]">
        <div>
          <ion-icon name="information-circle-sharp"></ion-icon>
        </div>
        <div className="hover:cursor-pointer" onClick={logout}>
          <ion-icon name="log-out-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default RecipientHeader;
