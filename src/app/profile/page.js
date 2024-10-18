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
import Follow from "../../icons/Follow";
// import ArrowBack from "../icons/ArrowBack";

export default function SignUpPage() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");

  return (
    <main className="max-w-[90%] h-[100vh] mt-20 mx-auto py-20 w-full">
      <div className="grid grid-cols-2 grid-rows-3 max-w-[50%] mx-auto gap-4 relative">
        <div className="rounded-3xl card flex flex-col pt-10 pb-7 gap-x-4 px-12 col-span-2">
          <div className="flex flex-row justify-between mb-3">
            <h1 className="text-title pl-4 font-space_grotesk">@Zeus</h1>
            <button
              className="relative link bg-gray-100 rounded-[0.6rem] text-base py-1 group border-0 border-[#fff] hover:bg-gray-200 w-1/6 flex flex-row items-center justify-center gap-x-0.5"
              //   D7368B
            >
              <Follow className="w-4 h-4 transform -scale-x-100 text-[#121212] mb-0.5" />
              <span className="text-[#121212] font-semibold">Follow</span>
            </button>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="rounded-full p-2">
                <img
                  src="/user.png"
                  width="80"
                  height="80"
                  className="rounded-full"
                />

                {/* <User /> */}
                {/* <img src="/user.svg" width="22px" /> */}
              </div>

              <div className="ml-4 mb-2">
                <p className="text-base">Zeus</p>
                <p className="text-base text-[#aaa]">Web Developer</p>
              </div>
            </div>
            <div className="mb-2">
              <p className="text-base text-[#aaa] text-end">10 Followers</p>
              <p className="text-base text-[#aaa] text-end">11 Following</p>
            </div>
          </div>
        </div>
        {/* <div className="rounded-3xl card py-14 row-span-2"> */}
        {/* <HoverButton
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
              label="Name"
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
        <button className="rounded-3xl card flex items-center justify-center">
          <h2 className="text-[2.15rem] tracking-tighter font-space_grotesk">
            <span className="text-8xl  tracking-tighter -ml-1">14</span> <br />
            Tools
          </h2>
        </button>
        <button className="rounded-3xl card flex items-center justify-center">
          <h2 className="text-[2.15rem] tracking-tighter font-space_grotesk">
            <span className="text-8xl  tracking-tighter -ml-1">8</span> <br />
            Collections
          </h2>
        </button>

      </div>
    </main>
  );
}
