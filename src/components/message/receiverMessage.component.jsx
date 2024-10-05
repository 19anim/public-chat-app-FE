import React from "react";

const ReceiverMessage = ({ message, avatar, isContinuousMessage }) => {
  return (
    <>
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
    </>
  );
};

export default ReceiverMessage;
