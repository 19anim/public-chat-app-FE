const SenderMessage = ({ message, avatar }) => {
  return (
    <div className="self-end flex items-center max-w-[30%]">
      <p className="bg-blue-500 rounded-[50px] px-3 py-1">
        {message.messageContent}
      </p>
      <img src={avatar} alt="avatar" className="h-[40px]" />
    </div>
  );
};

export default SenderMessage;
