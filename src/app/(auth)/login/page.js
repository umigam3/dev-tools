"use client";

// Utility
import axios from "axios";
import { useState } from "react";

// UI
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

// Icons
import { EyeSlashFilledIcon } from "../components/ui/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/ui/EyeFilledIcon";

export default function LoginPage() {
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
    <main className="max-w-6xl mx-auto flex flex-col items-center min-h-[calc(100vh-112px)] py-20">
      {/* <span className="font-bold text-2xl mb-8">AllTools</span> */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center px-8 md:px-14 pb-10 bg-[#121212] border-[#3F3F46]/10 border-0 rounded-xl max-w-[30rem] w-full"
      >
        {/* <img src="/logo.svg" width="75" className="mb-1" /> */}
        <div className="flex flex-col gap-y-3 items-center mb-10">
          <h1 className="text-3xl font-normal">Sign in into AllTools</h1>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4 w-full">
          <Input
            color="dark"
            className=""
            variant="bordered"
            type="email"
            label="Email"
            // size="sm"
            // radius="md"
            // placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isClearable
            onClear={() => {
              setEmail("");
            }}
            isRequired
            classNames={{ inputWrapper: ["border-1"] }}
          />
        </div>
        <div className="mb-9 w-full">
          <Input
            variant="bordered"
            label="Password"
            id="password"
            // size="sm"
            // radius="md"
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
            isRequired
            classNames={{ inputWrapper: ["border-1"] }}
          />
        </div>
        <Button
          isLoading={isSubmitting}
          type="submit"
          color="primary"
          className="text-lg w-[98%] mb-16 py-7 px-8 bg-gradient text-[#f1f1f1] rounded-xxl font-medium"
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>
        <div className="w-full text-center mb-10">
          <span className="text-lg">
            No accout?{" "}
            <a href="/signup" className="text-pink-500 underline">
              Sign up
            </a>
          </span>
        </div>
      </form>
    </main>
  );
}
