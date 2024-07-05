import React from "react";

const Conversation = ({ avatar, recipientName, finalMessage }) => {
  return (
    <div className="flex items-center hover:bg-[#ffffff40] rounded-lg px-2">
      <img className="h-[60px]" src={avatar} alt="avatar" />
      <div className="w-full text-[15px]">
        <h2>{recipientName}</h2>
        <div className="w-full flex justify-between">
          <p>{finalMessage.message} </p>
          <p>{finalMessage.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
