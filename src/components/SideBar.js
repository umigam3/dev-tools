import Login from "../icons/LogIn";

// Utility
import { useRouter } from "next/navigation";

// UI
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import User from "../icons/User";
import Close from "../icons/Close";

export default function SideBar() {
  const session = false;
  const router = useRouter();

  return (
    <div className="fixed z-40 flex items-start justify-center w-16 h-full bg-[#c53535] header pt-10">
      <div className="flex flex-col justify-between">
        <Close className="text-gray-100" />
      </div>
    </div>
  );
}
