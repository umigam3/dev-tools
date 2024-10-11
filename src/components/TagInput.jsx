import { useState, useRef } from "react";
import { Input, Chip, Dropdown } from "@nextui-org/react";

const allSuggestions = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "CSS",
  "Tailwind",
  "UI/UX",
  "TypeScript",
];

export default function TagInput() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dropdownFocus, setDropdownFOcus] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    console.log("e", e.target.value);
    const value = e.target.value;
    const inputRect = inputRef.current.getBoundingClientRect();

    setInputValue(value);
    if (value) {
      const filteredSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      console.log("filteredSuggestions", filteredSuggestions);
      setDropdownPosition({
        top: 75, // Position the dropdown below the input
        left: value.length * 10,
      });
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    console.log("key", e.key);
    if (e.key === "Enter" && inputValue) {
      if (!tags.includes(inputValue) && !suggestions.length) {
        setTags([...tags, inputValue]);
      }
      setInputValue("");
      setSuggestions([]); // Clear suggestions
    } else if (e.key === "ArrowDown" && setSuggestions.length) {
      console.log("HOLA");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!tags.includes(suggestion)) {
      setTags([...tags, suggestion]);
    }
    setInputValue(""); // Clear input after selecting a suggestion
    setSuggestions([]); // Clear suggestions
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="flex flex-col gap-2 w-11/12 mb-4 relative">
      <label className="text-base px-2">Tags</label>{" "}
      <Input
        ref={inputRef}
        placeholder="Add a tag"
        color="dark"
        variant="bordered"
        size="md"
        radius="md"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        classNames={{
          //   base: ["relative"],
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
      {suggestions?.length > 0 && (
        //   {console console.log(suggestions.length)
        <div
          className="flex flex-col absolute top-0 bg-[#121212] z-50 rounded-[0.6rem] px-2 py-2"
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="hover:bg-[#202020] px-2 py-1 text-[13px] rounded-[0.6rem] cursor-pointer"
            >
              {suggestion}
            </div>
          ))}
        </div>

        // <Dropdown>
        //   <Dropdown.Menu aria-label="Suggestions">
        //     {suggestions.map((suggestion, index) => (
        //       <Dropdown.Item
        //         key={index}
        //         onClick={() => handleSuggestionClick(suggestion)}
        //       >
        //         {suggestion}
        //       </Dropdown.Item>
        //     ))}
        //   </Dropdown.Menu>
        // </Dropdown>
      )}
      <div className="flex flex-wrap gap-2 h-20 ml-2">
        {tags.map((tag, index) => (
          <Chip
            key={index}
            onClose={() => removeTag(tag)}
            closable
            radius="full"
            variant="bordered"
            classNames={{
              base: [
                "border-1 text-[#aaa] text-[13px] font-normal pl-2.5 pr-2.5 py-[0.15rem] dark:border-[#525252] dark:text-[#aaa]",
              ],
              closeButton: ["w-[0.9rem]"],
              content: ["pr-1 pl-0"],
            }}
          >
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
}
