"use client";

// Utility
import axios from "axios";
import { useState, useEffect } from "react";

// UI
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Close from "@/icons/Close";

// Icons
import { EyeSlashFilledIcon } from "@/components/ui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/EyeFilledIcon";

// Framer Motion
import { motion } from "framer-motion";
import ArrowNext from "@/icons/ArrowNext";

export default function SignUp({ setShowSignUp, setShowLogIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalSlide, setModalSlide] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    console.log("baseURL", baseURL);
    try {
      const response = await axios.post(`${baseURL}/users`, {
        username,
        email,
        password,
      });
    } catch (err) {
      setError("Sign up failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSignUp(false);
      }
    };

    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowSignUp]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
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
      <motion.div
        className="flex flex-col items-center my-48 modal rounded-2xl max-w-[25rem] w-full relative"
        onSubmit={handleSubmit}
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
        {modalSlide === 0 && (
          <motion.div className="flex flex-col items-center w-full px-8 md:px-14 pb-10">
            <button
              type="button"
              onClick={() => setShowSignUp(false)}
              className="hover:bg-white/15 rounded-full p-2 absolute top-4 right-5"
            >
              <Close className="text-gray-100" />
            </button>
            <div className="mb-4  mt-16">
              <h1 className="text-title font-bold font-space_grotesk">
                Join Dev Tools!
              </h1>
            </div>
            <ul className="flex flex-col gap-4 mt-1 px-4 pb-10 pt-4 rounded-xl bg-[#323232] text-[#f1f1f1] mb-6 w-11/12">
              {/* <p>With an account you will be able to:</p> */}
              <p className="text-center font-medium mb-2">Benefits</p>
              <li className="flex flex-row gap-x-3 ml-3">
                <img src="/check.svg" height={18} width={18} alt="check" />
                Save Tools
              </li>
              <li className="flex flex-row gap-x-3 ml-3">
                <img src="/check.svg" height={18} width={18} alt="check" />
                Create Tools
              </li>
              <li className="flex flex-row gap-x-3 ml-3">
                <img src="/check.svg" height={18} width={18} alt="check" />
                Create Collections
              </li>
              <li className="flex flex-row gap-x-3 ml-3">
                <img src="/check.svg" height={18} width={18} alt="check" />
                Follow other users
              </li>
            </ul>
            <Button
              type="button"
              color="primary"
              className="text-base w-11/12 mb-6 py-6 px-8 bg-gradient text-[#f1f1f1] rounded-xxl font-medium"
            >
              Start
              <ArrowNext />
            </Button>
            <div className="w-full text-center mb-6">
              <span className="text-[13px]">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setShowSignUp(false);
                    setTimeout(() => {
                      setShowLogIn(true);
                    }, 300);
                  }}
                  className="text-pink-500 underline"
                >
                  Sign in
                </button>
              </span>
            </div>
          </motion.div>
        )}
        {modalSlide === 1 && (
          <motion.form>
            {/* <img src="/logo.svg" width="75" className="mb-1" /> */}
            <button
              type="button"
              onClick={() => setShowSignUp(false)}
              className="hover:bg-white/15 rounded-full p-2 absolute top-4 right-5"
            >
              <Close className="text-gray-100" />
            </button>
            <div className="mb-4  mt-16">
              <h1 className="text-title font-bold font-space_grotesk">
                Join Dev Tools!
              </h1>
            </div>
            <div className="h-5 z-40 mb-3 overflow-hidden relative">
              {error && (
                <p className="text-red-500 text-[13px] px-4">{error}</p>
              )}
            </div>{" "}
            <div className="mb-3 w-11/12 z-30 relative">
              <Input
                color="dark"
                variant="bordered"
                type="username"
                label="Username"
                size="sm"
                radius="md"
                // placeholder="Enter your email"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // isClearable
                // onClear={() => {
                //   setEmail("");
                // }}
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
            <div className="mb-3 w-11/12 z-20 relative">
              <Input
                color="dark"
                variant="bordered"
                type="email"
                label="Email"
                size="sm"
                radius="md"
                // placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // isClearable
                // onClear={() => {
                //   setEmail("");
                // }}
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
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {password.length > 0 &&
                      (isVisible ? (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ))}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                // isRequired
                classNames={{
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
              {isSubmitting ? "Creating..." : "Create account"}
            </Button>
          </motion.form>
        )}
      </motion.div>
    </motion.div>
  );
}
