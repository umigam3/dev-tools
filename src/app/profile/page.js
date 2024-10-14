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
  return (
    <main className="max-w-[90%] h-[100vh] mt-20 mx-auto modal grid py-20 w-full"></main>
  );
}
