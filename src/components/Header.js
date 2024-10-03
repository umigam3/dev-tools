import Login from "@/icons/LogIn";
import { Button } from "@nextui-org/button";

export default function Header() {
  return (
    <header className="flex items-center h-20 w-full">
      <div className="flex justify-between max-w-7xl w-full mx-auto px-9">
        <a
          href="/"
          className="flex flex-row items-center text-base font-medium gap-x-2"
        >
          <img src="/logo.svg" width="30" className="" />
          Dev Tools
        </a>

        <a
          href="/login"
          // className="bg-gradient-to-r from-pink-600 to-purple-400 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-[#f1f1f1] dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-36 max-w-36"
          className="relative group inline-flex justify-center items-center py-1 px-5 w-30 w-max-30 text-base font-medium text-center bg-transparent text-[#f1f1f1] rounded-lg focus:ring-4 focus:ring-primary-300 hover:text-gradient hover:font-black hover:tracking-tight"

          // className="text-lg w-full px-8 bg-gradient-to-r from-[#DB2677] to-[#b24dda] text-[#f1f1f1] rounded-xxl font-medium"
        >
          {/* <img src="/user.svg" width="22px" className="mr-1" /> */}
          Sign in
        </a>
        {/* <a href="/login"> */}
        {/* <Login className="h-6 w-6 hover:scale-125 duration-150" /> */}
        {/* </a> */}
        {/* <nav>
        </nav> */}
      </div>
    </header>
  );
}
