import React from "react";
import { Input } from "@nextui-org/react";

export const InputDev = ({
  type,
  label,
  value,
  onChange,
  isRequired,
  isDisabled,
}) => (
  <Input
    color="dark"
    variant="bordered"
    type={type}
    label={label}
    size="sm"
    radius="md"
    id={label}
    isDisabled={isDisabled ?? false}
    value={value}
    onChange={onChange}
    isRequired={isRequired ?? false}
    classNames={{
      input: ["text-base"],
      mainWrapper: ["text-base"],
      label: [
        "text-base",
        "text-gray-200",
        "absolute",
        "transition-all",
        "px-2",
        "duration-300",
        "bg-[#1f1f1f]",
        "group-data-[filled-within=true]:-translate-y-[calc(80%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]",
      ],

      innerWrapper: ["group-data-[has-label=true]:items-center"],
      inputWrapper: [
        `border-${isDisabled ? "transparent" : "[#525252]"}`,
        "group-data-[focus=true]:border-[#D50E97]",
        "group-data-[focus=true]:border-2",
        `border-1`,
        "py-0",
        "text-2xl",
        "transition-all",
      ],
      input: ["pl-2", "text-base"],
    }}
  />
);
