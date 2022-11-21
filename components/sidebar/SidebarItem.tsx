import { ReactElement, ReactNode } from "react";

type SidebarItemProps = {
  label: string;
  icon?: ReactElement | ReactNode;
  active: boolean;
  collapse?: boolean;
};

export default function SidebarItem({ label, icon, active }: SidebarItemProps) {
  return (
    <div
      className={`inline-flex items-center my-1 ${
        active ? "secondary-bg" : ""
      } hover:secondary-bg hover:cursor-pointer w-full px-3 h-10 rounded-xl`}
    >
      <div className="mr-6">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
