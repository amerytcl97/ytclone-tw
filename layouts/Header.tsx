import Link from "next/link";
import NotificationDropMenu from "../components/NotificationDropMenu";
import SearchInput from "../components/SearchInput";
import SidebarButton from "../components/sidebar/SidebarButton";
import Logo from "../icons/Logo";

export default function Header() {
  return (
    <header className="h-[56px] sticky top-0 w-full flex flex-row items-center justify-between px-4">
      {/* MENU AND LOGO CONTAINER */}
      <div className="flex items-center gap-4 h-full">
        <SidebarButton />
        <Link href="#" className="">
          <Logo className="h-[20px] w-[90px] fill-white" />
        </Link>
      </div>
      {/* SEARCH CONTAINER */}
      <SearchInput />
      {/* NOTIFICATION AND PROFILE CONTAINER */}
      <div className="">
        <NotificationDropMenu />
      </div>
    </header>
  );
}
