"use client";

// Utility
import axios from "axios";
import { useState } from "react";

// UI
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Close from "@/icons/Close";

// Icons
import { EyeSlashFilledIcon } from "@/components/ui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/ui/EyeFilledIcon";

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
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <motion.form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-center items-center px-8 md:px-14 pb-10 my-48 modal border-[#3F3F46]/10 border-0 rounded-2xl max-w-[25rem] w-full"
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
          className="hover:bg-white/15 rounded-full p-2 absolute top-4 right-5"
        >
          <Close className="text-gray-100" />
        </button>
        <div className="flex flex-col gap-y-3 items-center mb-10">
          <h1 className="text-title font-bold font-space_grotesk">
            Welcome back!
          </h1>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
              Register for free!
            </button>
          </span>
        </div>
      </motion.form>
    </motion.div>
  );
}
