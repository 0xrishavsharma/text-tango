"use client";
import Image from "next/image";
import React, { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";

const WritePage = () => {
  const [isOpen, setIsOpen] = useState();
  const [value, setValue] = useState("");

  const editorVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-200%" },
  };
  return (
    <div>
      <div className="my-20 flex h-[700px] flex-col gap-12">
        <input
          className="padding-12 border-none bg-transparent text-6xl outline-none placeholder:text-softestTextColor"
          type="text"
          placeholder="Title"
        />
        <div className="relative flex items-center gap-8">
          <button
            className={cn(
              isOpen ? " border-softTextColor" : "border-green-700",
              "flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] transition-all duration-300",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {isOpen && (
            <motion.div
              className="w-100% absolute left-16 z-[999] flex h-max gap-6 bg-bg "
              animate={{ x: 10 }}
              variants={editorVariants}
              // transition={{ delay: 0.1 }}
            >
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-green-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Image src="/image.png" alt="" width={16} height={16} />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-green-700 p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-green-700 p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </motion.div>
          )}
          <ReactQuill
            className="w-full "
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Let's write something..."
          />
        </div>
        <button className="fixed right-5 top-7 z-[9999] rounded-full border-none bg-green-700 px-5 py-2 text-white">
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
