"use client";

import { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";
import axios from "axios";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./ui/SearchIcon";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [initialView, setInitialView] = useState(true);
  const [showAllButton, setShowAllButton] = useState(false);

  const baseURL = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await axios.get(`${baseURL}/tools`);
      setData(response.data.tools);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get(`${baseURL}/tags`);
      setTags(response.data.tags);
      setSelectedTags([response.data.tags[0], response.data.tags[1]]);
    };

    fetchTags();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setInitialView(false);
  };

  const showAllItems = () => {
    setInitialView(false);
    setShowAllButton(false);
  };

  const filteredData = useMemo(() => {
    return data ?? [];
    // ? data.filter(
    //     (tool) =>
    //       tool.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    //       (selectedTags.length === 0 ||
    //         selectedTags.every((tag) => tool.tags.includes(tag)))
    //   )
    // : [];
  }, [data, searchQuery, selectedTags]);

  const displayedData = initialView ? filteredData.slice(0, 30) : filteredData;

  useEffect(() => {
    setShowAllButton(initialView && filteredData.length > 30);
  }, [initialView, filteredData]);

  return (
    <div className="min-h-[calc(100dvh-400px)] w-full ">
      <div className="w-[60%] mx-auto mb-3">
        <Input
          size="lg"
          variant="bordered"
          color="dark"
          classNames={{
            label: "text-black/50 dark:text-[#f1f1f1]/90",
            input: [
              "bg-transparent",
              "text-base",
              "text-black/90 dark:text-[#f1f1f1]/90",
              "placeholder:text-default-700/50 dark:placeholder:text-[#f1f1f1]/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "border-1",
              "text-base",
              "bg-transparent",
              "border-[#525252]",
              "!cursor-text",
            ],
          }}
          placeholder={`Search among ${filteredData.length} tools`}
          value={searchQuery}
          onChange={handleSearchChange}
          startContent={
            <SearchIcon className="text-[#f1f1f1]/60 mb-0.5 dark:text-[#f1f1f1]/90 pointer-events-none flex-shrink-0" />
          }
          onClear={() => {
            setSearchQuery("");
          }}
          isClearable
        />
      </div>
      <div className="w-[60%] mx-auto mb-16 pl-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.tag_id}
            className={`px-4 py-1 rounded-3xl border-[#525252] border text-[13px] font-normal ${
              selectedTags.includes(tag)
                ? "bg-[#f1f1f1] text-[#121212] border-0"
                : "text-[#f1f1f1]"
            }`}
          >
            {tag.name}
          </button>
        ))}
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9 mx-auto w-full">
        {!isLoading &&
          displayedData.map((tool) => <Card key={tool.tool_id} tool={tool} />)}
      </section>
      {filteredData.length === 0 && (
        <div className="flex items-center justify-center h-48 w-full text-4xl font-bold opacity-20 text-center">
          <span className="text-center">No tools found</span>
        </div>
      )}
    </div>
  );
}
