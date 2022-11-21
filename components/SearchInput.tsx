import { useState } from "react";
import Search from "../icons/Search";
import { LocalStorage } from "../utils/localstorage";
import AutoCompleteMenu from "./autocomplete/AutoCompleteMenu";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const search = async () => {
    await LocalStorage.SetSearchHistories(query);
  };

  return (
    // SEARCH CONTAINER
    <div className="relative group">
      <div className="inline-flex border border-[var(--border-color)] rounded-full h-10 relative">
        {/* INPUT CONTAINER */}
        <div className="inline-flex border border-transparent rounded-tl-inherit rounded-bl-inherit items-center group focus-within:border-blue-600">
          {/* SEARCH DUMMY ICON THAT ONLY APPEARS WHEN FOCUSED */}
          <Search className="h-5 w-5 hidden ml-4 group-focus-within:block" />
          <input
            type="search"
            placeholder="Search"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
            className="outline-none h-full bg-transparent font-light ml-4 focus:ml-2"
          />
        </div>
        {/* SEARCH BUTTON */}
        <button
          type="button"
          title="Search"
          onClick={search}
          className="bg-[var(--border-color)] rounded-tr-inherit rounded-br-inherit px-4"
        >
          <Search className="h-6 w-6" />
        </button>
      </div>
      {/* AUTOCOMPLETE DROP MENU */}
      <div className="absolute mt-2 w-full hidden group-focus-within:block">
        <AutoCompleteMenu query={query} />
      </div>
    </div>
  );
}
