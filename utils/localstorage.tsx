const TYPE_SEARCH_HISTORY: string = "searchHistory";

const LIMIT_SEARCH_HISTORY: number = 10;

const SetSearchHistories = (value: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    let searchHistories: string[] = [];
    // GET THE STRINGIFIED SEARCH HISTORIES FROM LOCAL STORAGE
    const searchHistoriesRaw = localStorage.getItem(TYPE_SEARCH_HISTORY);
    // CHECK IF STRINGIFIED SEARCH HISTORIES IS NOT EMPTY
    if (searchHistoriesRaw) {
      //IF STRINGIFIED SEARCH HISTORIES IS NOT EMPTY, THEN PARSE INTO ARRAY STRING
      searchHistories = JSON.parse(searchHistoriesRaw);
      // CHECK IF SEARCH HISTORIES ARRAY IS MORE THAN OR EQUAL TO {LIMIT_SEARCH_HISTORY}
      if (searchHistories.length >= LIMIT_SEARCH_HISTORY) {
        // IF MORE THAN {LIMIT_SEARCH_HISTORY} THEN REMOVE LAST ELEMENT IN ARRAY
        searchHistories.pop();
      }
    }
    // PUSH ELEMENT INTO FIRST INDEX
    searchHistories.unshift(value);
    localStorage.setItem(TYPE_SEARCH_HISTORY, JSON.stringify(searchHistories));
    resolve();
  });
};

const GetSearchHistories = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const searchHistoriesRaw = localStorage.getItem(TYPE_SEARCH_HISTORY);
    if (searchHistoriesRaw) {
      const searchHistories = JSON.parse(searchHistoriesRaw);
      resolve(searchHistories);
    } else {
      resolve([]);
    }
  });
};

export const LocalStorage = { SetSearchHistories, GetSearchHistories };
