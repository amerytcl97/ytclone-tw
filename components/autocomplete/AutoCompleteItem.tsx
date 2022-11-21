import Link from "next/link";
import { ReactElement, ReactNode } from "react";

type AutoCompleteItemProps = {
  icon?: ReactElement | ReactNode;
  label: string;
};

export default function AutoCompleteItem(props: AutoCompleteItemProps) {
  return (
    <div className="inline-flex items-center w-full justify-between">
      <div className="inline-flex items-center flex-1">
        {props.icon}
        {props.label}
      </div>
      <button type="button" className="text-blue-500 text-sm hover:underline">
        Remove
      </button>
    </div>
  );
}
