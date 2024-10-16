"use client";

// Utility
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TagInput from "../../components/TagInput";

// UI
import { Input, Button, Textarea } from "@nextui-org/react";
import Edit from "../../icons/Edit";

import HoverButton from "../../components/HoverButton";

// Icons
// import { EyeSlashFilledIcon } from "../components/ui/EyeSlashFilledIcon";
// import { EyeFilledIcon } from "../components/ui/EyeFilledIcon";

// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
import Card from "../../components/Card";
import { InputDev } from "../../components/ui/InputDev";
// import ArrowNext from "../icons/ArrowNext";
// import ArrowBack from "../icons/ArrowBack";

export default function SignUpPage() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");

  return (
    <main className="max-w-[90%] h-[100vh] mt-20 mx-auto py-20 w-full">
      <div className="grid grid-cols-2 grid-rows-3 max-w-[50%] mx-auto gap-4 relative">
        <div className="h-48 rounded-3xl card col-span-1 flex py-10 gap-x-4 pl-12">
          <button type="button" className="rounded-full p-2 top-4 right-5">
            <img src="/user.png" width="75" className="rounded-full" />

            {/* <User /> */}
            {/* <img src="/user.svg" width="22px" /> */}
          </button>

          <div className="mt-5">
            <p className="text-title font-space_grotesk">@Zeus</p>
            <p className="text-base text-[#aaa] pl-1">Web Developer</p>
          </div>
        </div>
        <div className="rounded-3xl card py-14 row-span-2">
          <HoverButton
            onClick={() => setEdit(edit ? false : true)}
            className={"p-2 rounded-xl absolute top-4 right-5"}
            icon={
              // <Bookmark className="my-0.5 text-transparent group-hover:text-[#f1f1f1] transition-all duration-150 z-50 relative" />
              <Edit className="text-gray-100 z-50 relative" />
            }
          />
          <div className="mb-4 px-11">
            <InputDev
              type="name"
              label="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isDisabled={edit}
            />
          </div>
          <div className="mb-4 px-11">
            <InputDev
              type="email"
              label="Email"
              value={"hola"}
              onChange={() => {}}
              isDisabled={edit}
            />
          </div>
          {/* <div className="mb-4">
            <p className="text-[14px] leading-tight">Password</p>
            <p className="text-[#aaa]">*********</p>
          </div>
          <div>
            <p className="text-[14px] leading-tight">Phone</p>
            <p className="text-[#aaa]">636175308</p>
          </div> */}
          {/* <div>
            <p className="text-[#aaa] text-[13px]">First Name</p>
            <p>Zeus</p>
          </div> */}
        </div>
        <div className="h-48 rounded-3xl card"></div>
        <div className="h-48 rounded-3xl card col-span-2"></div>
      </div>
    </main>
  );
}
