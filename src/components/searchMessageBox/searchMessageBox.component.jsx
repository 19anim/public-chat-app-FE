import { useCallback, useRef, useState, useEffect } from "react";
import API from "../../utils/apiEnum";
import SearchResultComponent from "./searchResult.component";
import LoadingSpinner from "../loading_spinner/loadingSpinner.component";

const SearchMessageBox = () => {
  const searchInputRef = useRef();
  const returnArrowRef = useRef();
  const searchBoxResultRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { SEARCH_CONVERSATIONS } = API;

  const { conversations, users } = searchResult ? searchResult : [];
  const filteredConversations = conversations?.filter((conversation) => {
    return conversation.participantId.length > 2;
  });

  const documentOnClickHandler = (e) => {
    if (e.target.id !== searchInputRef.current.id) {
      returnArrowRef.current.className = "hidden";
      searchBoxResultRef.current.className = "hidden";
    }
  };

  useEffect(() => {
    document.addEventListener("click", documentOnClickHandler);

    return () => {
      document.removeEventListener("click", documentOnClickHandler);
    };
  });

  const debounce = (callback, delay) => {
    let timeout = null;
    return (...arg) => {
      setIsLoading(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...arg);
      }, delay);
    };
  };

  const inputEventHandler = (e) => {
    returnArrowRef.current.className = "flex items-center text-[20px]";
    searchBoxResultRef.current.className =
      "w-[85%] h-[500px] top-10 left-4 right-0 mx-auto rounded-[15px] absolute bg-[#414141] overflow-auto";
    debounceSearch(searchTerm);
  };

  const onChangeHandler = async (e) => {
    const tempSearchTerm = e.target.value;
    setSearchTerm(tempSearchTerm);
    debounceSearch(tempSearchTerm);
  };

  const fetchConversations = async (searchTerm) => {
    try {
      const res = await fetch(
        `${SEARCH_CONVERSATIONS}?conversationName=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setSearchResult(data);
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const debounceSearch = useCallback(
    debounce((searchTerm) => {
      fetchConversations(searchTerm);
    }, 300),
    []
  );

  return (
    <div className="flex relative gap-2 pb-3 px-3 border border-l-0 border-b-0 border-t-0 border-[#414141]">
      <div ref={returnArrowRef} className="hidden">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className="flex items-center w-full">
        <div className="bg-[#ffffff40] h-8 flex items-center px-2 text-[18px] rounded-[20px_0_0_20px]">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input
          id="searchInputRef"
          ref={searchInputRef}
          onChange={onChangeHandler}
          onFocus={inputEventHandler}
          className="bg-[#ffffff40] py-1 outline-none rounded-[0_20px_20px_0] w-full "
          placeholder="Search messages"
          type="text"
        />
      </div>
      <div ref={searchBoxResultRef} className="hidden transition-all">
        {isLoading ? (
          <div className="text-black flex gap-2 justify-center items-center">
            <LoadingSpinner size="s" />
            <div>Loading</div>
          </div>
        ) : (
          <SearchResultComponent
            searchBoxResultRef={searchBoxResultRef}
            returnArrowRef={returnArrowRef}
            conversations={filteredConversations}
            users={users}
          />
        )}
      </div>
    </div>
  );
};

export default SearchMessageBox;
