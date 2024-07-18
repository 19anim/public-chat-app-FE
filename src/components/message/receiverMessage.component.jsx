import React from "react";

const ReceiverMessage = ({ message, avatar, isContinuousMessage }) => {
  return (
    <div className="self-start flex items-center w-[70%] ml-3">
      {!isContinuousMessage && (
        <img src={avatar} alt="avatar" className="h-[32px]" />
      )}
      <p
        className={`bg-[#414141] rounded-[18px] px-3 py-1 ${
          isContinuousMessage ? "ml-[32px]" : null
        }`}
      >
        {message.messageContent}
      </p>
    </div>
  );
};

export default ReceiverMessage;
