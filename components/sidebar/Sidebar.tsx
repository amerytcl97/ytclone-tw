import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import History from "../../icons/History";
import Home from "../../icons/Home";
import Library from "../../icons/Library";
import Liked from "../../icons/Liked";
import Shorts from "../../icons/Shorts";
import Subscriptions from "../../icons/Subscriptions";
import WatchLater from "../../icons/WatchLater";
import { Route } from "../../interfaces/route";
import SidebarItem from "./SidebarItem";

const ROUTES: Route[] = [
  { href: "/", label: "Home", icon: <Home className="typical-icon-size" /> },
  {
    href: "/shorts",
    label: "Shorts",
    icon: <Shorts className="typical-icon-size" />,
  },
  {
    href: "/feed/subscriptions",
    label: "Subscriptions",
    icon: <Subscriptions className="typical-icon-size" />,
  },
];

const ROUTES_COLLAPSIBLE: Route[] = [
  {
    href: "/library",
    label: "Library",
    icon: <Library className="typical-icon-size" />,
  },
  {
    href: "/history",
    label: "History",
    icon: <History className="typical-icon-size" />,
  },
  {
    href: "/watchlater",
    label: "Watch later",
    icon: <WatchLater className="typical-icon-size" />,
  },
  {
    href: "/liked",
    label: "Liked videos",
    icon: <Liked className="typical-icon-size" />,
  },
];

export default function Sidebar() {
  const { pathname } = useRouter();

  return (
    <div className="fixed left-0 h-full w-60">
      <div className="flex flex-col justify-start pl-4 pr-8 py-2">
        <ul className="pb-2">
          {ROUTES.map((route, index) => (
            <li key={index} className="">
              <SidebarItem
                icon={route.icon}
                label={route.label}
                active={route.href === pathname}
              />
            </li>
          ))}
        </ul>
        <ul className="border-t py-2 border-t-[var(--border-color)]">
          {ROUTES_COLLAPSIBLE.map((route, index) => (
            <li key={index}>
              <SidebarItem
                icon={route.icon}
                label={route.label}
                active={route.href === pathname}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
