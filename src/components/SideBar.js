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
import HoverButton from "../components/HoverButton";

import User from "../icons/User";
import Home from "../icons/Home";
import Featured from "../icons/Featured";
import Users from "../icons/Users";
import Collections from "../icons/Collections";
import Tools from "../icons/Tools";
import { useState, useEffect } from "react";

export default function SideBar() {
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("selected", selected);
    if (selected === 0) router.push("/");
    else if (selected === 1) router.push("/featured");
    else if (selected === 2) router.push("/tools");
    else if (selected === 3) router.push("/collections");
  }, [selected]);

  return (
    <div className="fixed z-40 flex items-start justify-center w-16 h-full header pt-16 pl-4">
      <div className="flex flex-col justify-between gap-y-2">
        <HoverButton
          className={
            "p-2 w-16 h-16 rounded-xl relative flex flex-col items-center justify-center"
          }
          icon={
            <Home
              className="text-gray-100"
              fill={selected === 0 ? "#f3f4f6" : "none"}
            />
          }
          onClick={() => setSelected(0)}
          text={"Home"}
        />

        <HoverButton
          className={
            "p-2 w-16 h-16 rounded-xl relative flex flex-col items-center justify-center"
          }
          icon={
            <Featured
              className="text-gray-100"
              fill={selected === 1 ? "#f3f4f6" : "none"}
            />
          }
          onClick={() => setSelected(1)}
          text={"Featured"}
        />

        <HoverButton
          className={
            "p-2 w-16 h-16 rounded-xl relative flex flex-col items-center justify-center"
          }
          icon={
            <Tools
              className="text-gray-100"
              fill={selected === 2 ? "#f3f4f6" : "none"}
            />
          }
          onClick={() => setSelected(2)}
          text={"Tools"}
        />
        <HoverButton
          className={
            "p-2 w-16 h-16 rounded-xl relative flex flex-col items-center justify-center"
          }
          icon={
            <Collections
              className="text-gray-100"
              fill={selected === 3 ? "#f3f4f6" : "none"}
            />
          }
          onClick={() => setSelected(3)}
          text={"Collections"}
        />
        {/* <HoverButton
          className={
            "p-2 w-16 h-16 rounded-xl relative flex flex-col items-center justify-center"
          }
          icon={
            <Users
              className="text-gray-100"
              fill={selected === 2 ? "#f3f4f6" : "none"}
            />
          }
          onClick={() => setSelected(2)}
          text={"Users"}
        /> */}
      </div>
    </div>
  );
}
