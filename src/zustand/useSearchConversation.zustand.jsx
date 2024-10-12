import { create } from "zustand";

const useSearchConversation = create((set) => ({
  searchResult: null,
  setSearchResult: (searchResult) => {
    set({ searchResult });
  },
}));

export default useSearchConversation;
