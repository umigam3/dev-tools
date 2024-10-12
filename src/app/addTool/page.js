"use client";

// Utility
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TagInput from "../../components/TagInput";

// UI
import { Input, Button, Textarea } from "@nextui-org/react";

// Icons
// import { EyeSlashFilledIcon } from "../components/ui/EyeSlashFilledIcon";
// import { EyeFilledIcon } from "../components/ui/EyeFilledIcon";

// Framer Motion
import { AnimatePresence, motion } from "framer-motion";
import Card from "../../components/Card";
// import ArrowNext from "../icons/ArrowNext";
// import ArrowBack from "../icons/ArrowBack";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      const response = await axios.post(`${baseURL}/users`, {
        username,
        email,
        password,
      });

      router.push("/login");
    } catch (err) {
      setError("Sign up failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="max-w-6xl mx-auto grid grid-cols-[70%_30%] justify-items-center items-center min-h-[calc(100vh-112px)] py-20 w-full">
      <motion.form
        className="flex flex-col items-center my-36 modal rounded-2xl max-w-[25rem] w-full relative overflow-hidden"
        onSubmit={handleSubmit}
      >
        {/* <button
          type="button"
          onClick={() => setShowSignUp(false)}
          className="hover:bg-white/10 rounded-full p-2 absolute top-4 right-5 z-50"
        ></button> */}
        {/* <motion.form> */}
        <div className="flex flex-col items-center min-w-[100%] w-full px-8 md:px-14 pb-10">
          {/* <img src="/logo.svg" width="75" className="mb-1" /> */}
          <div className="mb-12  mt-16">
            <h1 className="text-title font-bold font-space_grotesk">
              Add Tool
            </h1>
          </div>
          <div className="mb-6 w-11/12 z-20 relative">
            <Input
              type="url"
              color="dark"
              variant="bordered"
              label="Title"
              size="md"
              radius="md"
              placeholder="Tool title"
              labelPlacement="outside"
              isRequired
              classNames={{
                input: ["text-base", "pl-1"],
                label: ["text-[#f1f1f1]", "text-base", "pl-2", "top-2/3"],
                mainWrapper: [
                  "px-[1px]",
                  "text-base",
                  "group-data-[focus=true]:px-0",
                ],

                innerWrapper: ["group-data-[has-label=true]:items-center"],
                inputWrapper: [
                  //   "py-6",
                  "border-[#525252]",
                  "group-data-[focus=true]:border-[#D50E97]",
                  "group-data-[focus=true]:border-2",
                  //   "group-data-[focus=true]:py-[calc(1.5rem - 1px)]",
                  "border-1",
                  "text-2xl",
                  "relative",
                ],
              }}
            />
          </div>
          <div className="mb-6 w-11/12 z-20 relative">
            <Input
              type="url"
              color="dark"
              variant="bordered"
              label="URL"
              size="md"
              radius="md"
              placeholder="https://alldevtools.com"
              labelPlacement="outside"
              isRequired
              classNames={{
                input: ["text-base", "pl-1"],
                label: ["text-[#f1f1f1]", "text-base", "pl-2", "top-2/3"],
                mainWrapper: [
                  "px-[1px]",
                  "text-base",
                  "group-data-[focus=true]:px-0",
                ],

                innerWrapper: ["group-data-[has-label=true]:items-center"],
                inputWrapper: [
                  //   "py-6",
                  "border-[#525252]",
                  "group-data-[focus=true]:border-[#D50E97]",
                  "group-data-[focus=true]:border-2",
                  //   "group-data-[focus=true]:py-[calc(1.5rem - 1px)]",
                  "border-1",
                  "text-2xl",
                ],
              }}
            />
          </div>

          <div className="w-11/12 mb-6">
            <label className="text-base px-2">
              Description<span className="text-[#F31260] ml-1">*</span>{" "}
              {/* Red asterisk */}
            </label>{" "}
            {/* Label */}
            <p className="text-[13px] text-gray-400 mb-1 pl-2">
              Keep it short. Less than 55 characters.{" "}
            </p>{" "}
            {/* Description on top */}
            <Textarea
              color="dark"
              variant="bordered"
              //   label="Description"
              //   description="Keep it short. Less than 55 characters."
              size="md"
              maxLength={55}
              maxRows={3}
              labelPlacement="outside"
              radius="md"
              //   isRequired
              placeholder="Write the tool's description"
              className="max-w-xs"
              classNames={{
                base: ["w-full"],
                input: ["text-base", "mt-2", "ml-0"],
                label: ["text-[#f1f1f1]", "text-base", "pl-2", "top-2/3"],
                mainWrapper: [],
                inputWrapper: [
                  "p-[1px]",
                  "text-base",
                  "px-4",
                  "group-data-[focus=true]:p-0",
                  "group-data-[focus=true]:px-[15px]",
                  "border-1",
                  "border-[#525252]",
                  "group-data-[focus=true]:border-[#D50E97]",
                  "group-data-[focus=true]:border-2",
                ],
              }}
            />
          </div>
          {/* <Button
              type="button"
              color="primary"
              className="text-base w-11/12 mb-6 py-6 px-8 bg-gradient text-[#f1f1f1] rounded-xxl font-medium"
              onClick={() => setModalSlide(2)}
            >
              Next
              <ArrowNext />
            </Button> */}
          {/* </div> */}
          {/* <div className="flex flex-col items-center min-w-[100%] w-full px-8 md:px-14 pb-10"> */}
          <TagInput />

          <Button
            isLoading={isSubmitting}
            type="submit"
            color="primary"
            // disabled={true}
            className="text-base w-11/12 mb-6 py-6 px-8 bg-gradient text-[#f1f1f1] rounded-xxl font-medium"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
              }
            }}
          >
            {isSubmitting ? "Creating..." : "Create Tool"}
          </Button>
        </div>
        {/* </motion.form> */}
      </motion.form>
      <div className="px-0 w-full">
        <Card
          key={1}
          tool={{
            title: "hola",
            description: "Description",
            tags: [],
            url: "",
          }}
        />
      </div>
    </main>
  );
}
