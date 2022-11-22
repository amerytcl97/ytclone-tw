import { useState } from "react";
import Notification from "../icons/Notification";
import Settings from "../icons/Settings";

const notifications = Array.from(Array(0), (_, x) => x);

export default function NotificationDropMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((o) => !o);
  };

  return (
    <div className="relative">
      {/* NOTIFICATION BUTTON */}
      <button
        type="button"
        title="Notification"
        aria-label="Notification Button"
        data-dropdown-toggle="dropdown"
        onClick={handleClick}
        className="typical-button-icon p-2"
      >
        <Notification className="typical-icon-size" />
      </button>
      {/* DROP MENU */}
      {open && (
        <div
          id="dropdown"
          className="absolute z-auto w-[30rem] right-0 shadow secondary-bg rounded-lg"
        >
          <div className="w-full">
            {/* DROP MENU HEADER */}
            <header className="inline-flex w-full items-center justify-between px-4 py-2 border-b border-b-[var(--border-color)]">
              <h3>Notifications</h3>
              <button type="button" className="typical-button-icon">
                <Settings className="typical-icon-size m-2" />
              </button>
            </header>
            {/* DROP MENU CONTENT */}
            {notifications.length > 0 ? (
              <ul className="h-64 overflow-y-scroll">
                {notifications.map((notification) => (
                  <li key={notification}>{notification}</li>
                ))}
              </ul>
            ) : (
              <span className="my-4 block text-center">No notifications</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
