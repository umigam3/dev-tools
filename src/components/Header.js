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

export default function Header({ setShowLogIn, setShowSignUp }) {
  const session = false;
  const router = useRouter();

  return (
    <header className="fixed z-40 flex items-center h-16 w-full bg-[#121212] header">
      <div className="flex justify-between w-full mx-auto pr-8 pl-20">
        <a
          href="/"
          className="flex flex-row items-center text-title tracking-tighter font-space_grotesk font-medium gap-x-1"
        >
          <img src="/logo.svg" width="36" className="" />
          Dev Tools
        </a>

        <div className="flex flex-row gap-x-4 items-center">
          {session ? (
            <>
              {/* Content for logged-in users (customize as needed) */}
              {/* <span className="text-[#f1f1f1]">Welcome back!</span> */}
              <button
                onClick={() => router.push("/addTool")}
                className="relative group inline-flex justify-center items-center py-1 px-7 w-max text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 bg-gradient max-h-8"
              >
                Add Tool
              </button>
              {/* <button
                onClick={() => setShowLogIn(true)}
                className="relative group inline-flex justify-center items-center py-1 px-5 w-max text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 hover:bg-white/15 p-4 max-h-8"
              >
                Collection
              </button> */}
              <Dropdown
                classNames={{
                  content: ["bg-[#202020]", "min-w-[100px]"],
                }}
              >
                <DropdownTrigger>
                  <button
                    type="button"
                    className="hover:bg-white/10 rounded-full p-2 top-4 right-5 z-50"
                  >
                    <img src="/user.png" width="25" className="rounded-full" />

                    {/* <User /> */}
                    {/* <img src="/user.svg" width="22px" /> */}
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" classNames={{}}>
                  <DropdownItem
                    key="profile"
                    classNames={{
                      base: [
                        "focus:border-red-500",
                        "data-[focus-visible=true]:outline-4",
                      ],
                    }}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem key="collections">Collections</DropdownItem>
                  <DropdownItem key="tools">Tools</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Add a profile button or logout functionality here */}
            </>
          ) : (
            <>
              {/* <button
                onClick={() => setShowLogIn(true)}
                className="relative group inline-flex justify-center items-center py-1 px-5 w-max text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 hover:bg-white/15 p-4"
              >
                Sign in
              </button> */}
              <button
                onClick={() => setShowSignUp(true)}
                className="relative group inline-flex justify-center items-center py-1 px-7 w-max text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 bg-gradient"
              >
                Join
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
