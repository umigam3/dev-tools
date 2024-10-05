import Login from "@/icons/LogIn";
import { Button } from "@nextui-org/button";

export default function Header({ setShowLogIn, setShowSignUp }) {
  return (
    <header className="fixed z-40 flex items-center h-16 w-full bg-[#121212] header">
      <div className="flex justify-between max-w-7xl w-full mx-auto px-9">
        <a
          href="/"
          className="flex flex-row items-center text-base font-medium gap-x-2"
        >
          <img src="/logo.svg" width="30" className="" />
          Dev Tools
        </a>

        <div className="flex flex-row gap-x-4">
          <button
            onClick={() => setShowLogIn(true)}
            // className="bg-gradient-to-r from-pink-600 to-purple-400 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-[#f1f1f1] dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-36 max-w-36"
            className="relative group inline-flex justify-center items-center py-1 px-5 w-30 w-max-30 text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 hover:bg-white/15 p-4"

            // className="text-lg w-full px-8 bg-gradient-to-r from-[#DB2677] to-[#b24dda] text-[#f1f1f1] rounded-xxl font-medium"
          >
            {/* <img src="/user.svg" width="22px" className="mr-1" /> */}
            Sign in
          </button>
          <button
            onClick={() => setShowSignUp(true)}
            // className="bg-gradient-to-r from-pink-600 to-purple-400 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-[#f1f1f1] dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-36 max-w-36"
            className="relative group inline-flex justify-center items-center py-1 px-7 w-30 w-max-30 text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 bg-gradient"

            // className="text-lg w-full px-8 bg-gradient-to-r from-[#DB2677] to-[#b24dda] text-[#f1f1f1] rounded-xxl font-medium"
          >
            {/* <img src="/user.svg" width="22px" className="mr-1" /> */}
            Join
          </button>
        </div>

        {/* <a href="/login"> */}
        {/* <Login className="h-6 w-6 hover:scale-125 duration-150" /> */}
        {/* </a> */}
        {/* <nav>
        </nav> */}
      </div>
    </header>
  );
}
