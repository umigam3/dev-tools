import Login from "@/icons/LogIn";
import { Button } from "@nextui-org/button";

// UI
import User from "@/icons/User";

export default function Header({ setShowLogIn, setShowSignUp }) {
  const session = true;

  return (
    <header className="fixed z-40 flex items-center h-16 w-full bg-[#121212] header">
      <div className="flex justify-between max-w-7xl w-full mx-auto px-9">
        <a
          href="/"
          className="flex flex-row items-center text-base font-space_grotesk font-medium gap-x-1"
        >
          <img src="/logo.svg" width="32" className="mt-0.5" />
          Dev Tools
        </a>

        <div className="flex flex-row gap-x-4 items-center">
          {session ? (
            <>
              {/* Content for logged-in users (customize as needed) */}
              {/* <span className="text-[#f1f1f1]">Welcome back!</span> */}
              {/* <button
                onClick={() => setShowSignUp(true)}
                className="relative group inline-flex justify-center items-center py-1 px-7 w-max text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 bg-gradient"
              >
                Add tool
              </button> */}
              <button
                onClick={() => setShowSignUp(true)}
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
              <button
                type="button"
                className="hover:bg-white/10 rounded-full p-2 top-4 right-5 z-50"
              >
                <img src="/user.png" width="25" className="rounded-full" />

                {/* <User /> */}
                {/* <img src="/user.svg" width="22px" /> */}
              </button>

              {/* Add a profile button or logout functionality here */}
            </>
          ) : (
            <>
              <button
                onClick={() => setShowLogIn(true)}
                className="relative group inline-flex justify-center items-center py-1 px-5 w-max text-base font-medium text-center text-[#f1f1f1] rounded-[0.6rem] focus:ring-primary-300 hover:bg-white/15 p-4"
              >
                Sign in
              </button>
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
