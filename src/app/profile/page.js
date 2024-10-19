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
import Link from "../../icons/Link";
import LinkedIn from "../../icons/LinkedIn";
import GitHub from "../../icons/GitHub";
import ArrowDown from "../../icons/ArrowDown";
// import ArrowBack from "../icons/ArrowBack";

export default function SignUpPage() {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");

  const interests = [
    "UX",
    "React",
    "JavaScript",
    "UI",
    "CSS",
    "HTML",
    "TypeScript",
  ];

  return (
    <main className="mt-16 pt-12 pb-16 ml-10 w-full flex justify-center">
      <div className="grid grid-cols-2 grid-rows-3 max-w-[50%] mx-auto gap-4 relative">
        <div className="rounded-3xl card flex flex-col pt-10 pb-7 gap-x-4 pl-12 pr-14 col-span-2">
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
        <button className="rounded-3xl card flex flex-col items-center justify-center gap-y-2 overflow-hidden group hover:gap-y-0 transition-all">
          <h2 className="text-[2.15rem] tracking-tighter font-space_grotesk leading-4">
            <span className="text-8xl  tracking-tighter -ml-1">14</span> <br />
            Tools
          </h2>
          <ArrowDown className="text-[#f1f1f1] w-12 h-12 group-hover:mb-4 transition-all" />
        </button>
        <button className="rounded-3xl card flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-[2.15rem] tracking-tighter font-space_grotesk leading-4 ">
            <span className="text-8xl  tracking-tighter -ml-1">8</span> <br />
            Collections
          </h2>
          <ArrowDown className="text-[#f1f1f1] w-12 h-12" />
        </button>

        <div className="rounded-3xl card grid grid-cols-2 pt-10 pb-7 gap-x-4 px-12 col-span-2">
          <div className="flex flex-col pl-4">
            <h2 className="text-title font-space_grotesk mb-2">Socials</h2>
            <ul className="flex flex-col gap-y-1">
              <li className="flex flex-row items-center gap-x-2">
                <Link className="w-4 h-4" />
                <a
                  href="noahguardiola.com"
                  className="hover:text-blue-400 hover:underline"
                >
                  zeusgodofsky.com
                </a>
              </li>
              <li className="flex flex-row items-center gap-x-2">
                <LinkedIn className="w-4 h-4" />
                <a
                  href="noahguardiola.com"
                  className="hover:text-blue-400 hover:underline"
                >
                  in/zeus
                </a>
              </li>
              <li className="flex flex-row items-center gap-x-2">
                <GitHub className="w-4 h-4 rounded-sm" />
                <a
                  href="noahguardiola.com"
                  className="hover:text-blue-400 hover:underline"
                >
                  zeus-coder
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col pl-10">
            <h2 className="text-title font-space_grotesk mb-2">Interests</h2>
            <div className="flex flex-wrap mb-6 w-full whitespace-nowrap -ml-0.5 gap-x-2">
              {interests.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="border-1 text-[#aaa] text-[13px] font-normal px-2.5 py-[0.15rem] rounded-xl dark:border-[#525252] dark:text-[#aaa] mb-2"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
