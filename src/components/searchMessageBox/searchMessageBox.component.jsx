const SearchMessageBox = () => {
  return (
    <div className="flex gap-2 pb-3 px-3 border border-l-0 border-b-0 border-t-0 border-[#414141]">
      <div className="flex items-center text-[20px]">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className="flex items-center w-full">
        <div className="bg-[#ffffff40] h-8 flex items-center px-2 text-[18px] rounded-[20px_0_0_20px]">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input
          className="bg-[#ffffff40] py-1 outline-none rounded-[0_20px_20px_0] w-full"
          placeholder="Search messages"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchMessageBox;
