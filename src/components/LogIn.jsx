"use client";

// Utility
import axios from "axios";
import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";

// UI
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Close from "../icons/Close";
import { InputDev } from "../components/ui/InputDev";

// Icons
import { EyeSlashFilledIcon } from "../components/ui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/ui/EyeFilledIcon";

// Framer Motion
import { motion } from "framer-motion";

export default function LogIn({ setShowLogIn, setShowSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post(`${baseURL}/auth/signin`, {
        email,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (err) {
      setError("Login failed. Check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowLogIn(false);
      }
    };

    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowLogIn]);

  return (
    <FocusTrap active={true}>
      <motion.div
        className="flex flex-row justify-center z-40 fixed top-0 h-[100vh] w-full backdrop-blur-[0px] bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,

          transition: {
            opacity: {
              ease: [0.32, 0, 0.67, 0],
              duration: 0.25, // exit transition
            },
          },
        }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center px-8 md:px-14 pb-10 my-48 modal border-[#3F3F46]/10 border-0 rounded-2xl max-w-[25rem] w-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 0.95,
            opacity: 0,

            transition: {
              opacity: {
                ease: [0.32, 0, 0.67, 0],
                duration: 0.25, // exit transition
              },
            },
          }}
          transition={{
            ease: [0.33, 1, 0.68, 1],
            duration: 0.25, // animate transition
          }}
        >
          {/* <img src="/logo.svg" width="75" className="mb-1" /> */}
          <button
            type="button"
            onClick={() => setShowLogIn(false)}
            className="hover:bg-white/10 rounded-full p-2 absolute top-4 right-5"
          >
            <Close className="text-gray-100" />
          </button>
          <div className="mb-4  mt-16">
            <h1 className="text-title font-bold font-space_grotesk">
              Welcome back!
            </h1>
          </div>
          {/* <div className="h-5 z-40 mb-3 overflow-hidden">
          {error && <p className="text-red-500 text-[13px] px-4">{error}</p>}
        </div> */}
          <button
            onClick={() => signIn("google")}
            className="px-6 py-2.5 w-[90%] border-1 rounded-full border-[#828282] mb-6 hover:bg-white/10"
          >
            Sign in with Google
          </button>
          <div className="w-full flex flex-row items-center justify-center mb-6">
            <div className="h-[1px] bg-[#f1f1f1] w-1/3"></div>
            <p className="px-4">or</p>
            <div className="h-[1px] bg-[#f1f1f1] w-1/3"></div>
          </div>
          <div className="mb-3 w-11/12 z-20 relative">
            <InputDev
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-10 w-11/12">
            <Input
              variant="bordered"
              label="Password"
              id="password"
              size="sm"
              radius="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // placeholder="Enter your password"
              endContent={
                password.length > 0 && (
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                    aria-hidden={modalSlide !== 1}
                    tabIndex={modalSlide !== 1 ? -1 : 0}
                  >
                    {isVisible ? (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                )
              }
              type={isVisible ? "text" : "password"}
              // isRequired
              classNames={{
                input: ["text-base"],
                mainWrapper: ["text-base"],
                label: [
                  "text-base",
                  "text-gray-200",
                  "absolute",
                  "transition-all",
                  "px-2",
                  // "rounded-full",
                  "duration-300",
                  "bg-[#1f1f1f]",
                  "group-data-[filled-within=true]:-translate-y-[calc(80%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]",
                ],

                innerWrapper: ["group-data-[has-label=true]:items-center"],
                inputWrapper: [
                  "border-[#525252]",
                  "group-data-[focus=true]:border-[#D50E97]",
                  "group-data-[focus=true]:border-2",
                  "border-1",
                  "py-0",
                  "text-2xl",
                ],
                input: ["pl-2", "text-base"],
              }}
            />
          </div>
          <Button
            isLoading={isSubmitting}
            type="submit"
            color="primary"
            className="text-base w-11/12 mb-6 py-6 px-8 bg-gradient text-[#f1f1f1] rounded-xxl font-medium"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
          <div className="w-full text-center mb-6">
            <span className="text-[13px]">
              No accout?{" "}
              <button
                type="button"
                onClick={() => {
                  setShowLogIn(false);
                  setTimeout(() => {
                    setShowSignUp(true);
                  }, 300);
                }}
                className="text-pink-500 underline"
              >
                Join for free!
              </button>
            </span>
          </div>
        </motion.form>
      </motion.div>
    </FocusTrap>
  );
}
