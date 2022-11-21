import { useCallback, useEffect, useState } from "react";
import { LocalStorage } from "../../utils/localstorage";
import AutoCompleteItem from "./AutoCompleteItem";

type AutoCompleteMenuProps = {
  query: string | undefined;
};

export default function AutoCompleteMenu({
  query = "",
}: AutoCompleteMenuProps) {
  const [histories, setHistories] = useState<string[]>([]);

  const filteredHistories = query
    ? histories.filter((history) =>
        history.toLowerCase().match(query.toLowerCase())
      )
    : histories;

  useEffect(() => {
    (async () => {
      const searchHistories = await LocalStorage.GetSearchHistories();
      setHistories((_) => [...searchHistories]);
    })();
  }, []);

  if (!filteredHistories.length) {
    return <></>;
  }

  return (
    <div className="h-fit bg-white rounded-lg text-black p-2">
      <ul className="space-y-2 ">
        {filteredHistories.map((history, index) => (
          <li key={index} className="hover:bg-slate-100 ">
            <AutoCompleteItem label={history} />
          </li>
        ))}
      </ul>
    </div>
  );
}
