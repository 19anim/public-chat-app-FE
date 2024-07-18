const SenderMessage = ({ message, avatar, isContinuousMessage }) => {
  return (
    <div className="self-end flex items-center max-w-[70%] mr-3">
      <p
        className={`bg-blue-500 rounded-[18px] px-3 py-1 ${
          isContinuousMessage && "mr-[32px]"
        }`}
      >
        {message.messageContent}
      </p>
      {!isContinuousMessage && (
        <img src={avatar} alt="avatar" className="h-[32px]" />
      )}
    </div>
  );
};

export default SenderMessage;
