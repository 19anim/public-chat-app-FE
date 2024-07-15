import React from "react";
import useLogout from "../../hooks/useLogout.hook";

const RecipientHeader = ({ avatar, recipientName }) => {
  const { logout } = useLogout();
  return (
    <div className="flex justify-between h-[60px] items-center border border-[#414141] border-l-0 border-r-0 px-3">
      <div className="flex items-center">
        <img className="h-[60px]" src={avatar} alt="avatar" />
        <h3 className="text-[20px]">{recipientName}</h3>
      </div>
      <div className="text-blue-500 text-[20px] flex gap-2">
        <ion-icon name="information-circle-sharp"></ion-icon>
        <div
          className="hover:cursor-pointer flex justify-center items-center"
          onClick={logout}
        >
          <ion-icon name="log-out-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default RecipientHeader;
