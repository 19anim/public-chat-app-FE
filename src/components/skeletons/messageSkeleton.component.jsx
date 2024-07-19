const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="self-start flex items-center w-[50%] ml-3 gap-2">
        <div className="size-8 bg-[#414141] rounded-[50%]"></div>
        <div className="flex-[1_1_0] h-8 bg-[#414141] rounded-[16px]"></div>
      </div>
      <div className="self-start flex items-center w-[70%] ml-3 gap-2">
        <div className="size-8 bg-[#414141] rounded-[50%]"></div>
        <div className="flex-[1_1_0] h-8 bg-[#414141] rounded-[16px]"></div>
      </div>
      <div className="self-start flex items-center w-[20%] ml-3 gap-2">
        <div className="size-8 bg-[#414141] rounded-[50%]"></div>
        <div className="flex-[1_1_0] h-8 bg-[#414141] rounded-[16px]"></div>
      </div>
      <div className="self-end flex items-center w-[30%] mr-3 gap-2">
        <div className="flex-[1_1_0] h-8 bg-[#414141] rounded-[16px]"></div>
        <div className="size-8 bg-[#414141] rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
