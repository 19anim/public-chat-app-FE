import React from "react";

const ReceiverMessage = ({ message, avatar }) => {
  return (
    <div className="self-start flex items-center max-w-[30%]">
      <img src={avatar} alt="avatar" className="h-[40px]" />
      <p className="bg-[#414141] rounded-[50px] px-3 py-1">
        {message.messageContent}
      </p>
    </div>
  );
};

export default ReceiverMessage;
