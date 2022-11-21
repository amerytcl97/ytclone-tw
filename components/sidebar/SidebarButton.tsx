import { useState } from "react";
import BurgerMenu from "../../icons/BurgerMenu";

export default function SidebarButton() {

  return (
    <div>
      <button type="button" className="typical-button-icon p-2">
        <BurgerMenu className="typical-icon-size" />
      </button>
    </div>
  );
}
