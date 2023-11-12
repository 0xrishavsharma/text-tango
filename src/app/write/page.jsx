"use client";
import Image from "next/image";
import React, { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";

const WritePage = () => {
  const [isOpen, setIsOpen] = useState();
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-12">
      <input type="text" placeholder="Title" />
      <div className="flex gap-8">
        <button className="h-max bg-white" onClick={() => setIsOpen(!isOpen)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {isOpen && (
          <div className="flex h-max gap-1 bg-red-400">
            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Let's write something..."
      />
    </div>
  );
};

export default WritePage;
