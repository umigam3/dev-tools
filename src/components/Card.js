import Arrow from "@/icons/Arrow";
import Bookmark from "@/icons/Bookmark";
import { useState } from "react";
import HoverCircle from "../components/HoverCircle";

export default function Card({ tool }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="card flex flex-col justify-between pl-7 pr-8 pt-6 pb-7 w-full rounded-2xl border-0 border-gray-600 relative">
      <div className="flex items-center justify-between mb-2 pr-1">
        <h2 className="font-bold text-title font-space_grotesk">
          {tool.title}
        </h2>
        {/* <button> */}
        <motion.button
          className="  py-2 px-2.5 rounded-full group absolute right-6 top-5"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          {/* hover:hover:bg-white/15 */}
          <Bookmark className="mb-1 text-transparent group-hover:text-[#f1f1f1] transition-all duration-150 z-50 relative" />

          <AnimatePresence>{hover && <HoverCircle />}</AnimatePresence>
        </motion.button>
      </div>
      <p className="text-base text-[#aaa] mb-2 w-4/5 line-clamp-2 ">
        {/* leading-6 h-[3rem] */}
        {tool.description}
      </p>
      <div className="flex flex-wrap mb-6 w-4/5 whitespace-nowrap -ml-0.5 gap-x-2">
        {tool.tags.map((tag, index) => {
          if (index < 3)
            return (
              <span
                key={index}
                className="border-1 text-[#aaa] text-[13px] font-normal px-2.5 py-[0.15rem] rounded-xl dark:border-[#525252] dark:text-[#aaa]"
              >
                {tag.name}
              </span>
            );
        })}
      </div>

      <div className="flex flex-row justify-between items-center">
        <a className="flex flex-row items-center gap-x-1.5 group" href="">
          <img src="/user.png" width="25" className="rounded-full" />

          <p className="text-[#aaa] group-hover:text-gray-300 pr-2">Zeus</p>
        </a>
        {/* <div class="relative p-[10px] bg-gradient-to-r from-[#DB2677] to-[#b24dda] rounded-lg flex flex-row items-baseline justify-end"> */}
        <a
          href={tool.url}
          target="_blank"
          className="relative link bg-gray-100 rounded-[0.6rem] text-base py-1 group border-0 border-[#fff] hover:bg-gray-200 w-2/6"
          //   D7368B
        >
          <div className="w-full link-container  flex flex-row items-center justify-center transition duration-150 ease-in-out">
            <span className="text-[#121212] font-semibold">Open</span>
            <Arrow
              className="w-5 h-5 text-[#121212] transform group-hover:-translate-y-[1px] [transition:transform_150ms,margin_150ms]
			"
              // hoverColor={hover ? "white" : "#121212"}
            />
          </div>
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}
