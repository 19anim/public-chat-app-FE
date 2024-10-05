const SenderMessage = ({ message, avatar, isContinuousMessage }) => {
  return (
    <>
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
    </>
  );
};

export default SenderMessage;
