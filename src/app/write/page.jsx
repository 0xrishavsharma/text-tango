"use client";
import Image from "next/image";
import React, { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { cn } from "@/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { ImImage } from "react-icons/im";
import { LiaFileUploadSolid } from "react-icons/lia";
import { RiVideoUploadLine } from "react-icons/ri";

const WritePage = () => {
  const [isOpen, setIsOpen] = useState();
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [articleInfo, setArticleInfo] = useState({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });

  const { status } = useSession();
  const { push } = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    push("/login");
  }

  const editorVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-200%" },
  };

  console.log("File", file);

  return (
    <div className="relative">
      <div>
        <div className="my-20 flex h-[700px] flex-col gap-12">
          <input
            className="padding-12 border-none bg-transparent text-6xl outline-none placeholder:text-softestTextColor"
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setArticleInfo({ ...articleInfo, title: e.target.value })
            }
          />
          <div className="relative flex items-center gap-8">
            <button
              className={cn(
                isOpen ? " border-softTextColor" : "border-themeRedColor",
                "flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] transition-all duration-300",
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div animate={{ rotate: [0, 180, 0] }}>
                <Image src="/plus.png" alt="" width={16} height={16} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="w-100% absolute left-16 z-[999] flex h-max gap-6 bg-bg "
                  // initial={{ opacity: 0, x: "-200%" }}
                  exit={{ opacity: 0, x: "0" }}
                  animate={{ x: 10 }}
                  variants={editorVariants}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <input
                    type="file"
                    id="imageUpload"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                  />
                  <button
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-themeRedColor"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <label htmlFor="imageUpload" className="cursor-pointer">
                      {/* <Image src="/image.png" alt="" width={16} height={16} /> */}
                      <motion.div>
                        <ImImage className="h-4 w-4 stroke-[0.1] text-themeRedColor opacity-80 " />
                      </motion.div>
                    </label>
                  </button>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-themeRedColor p-1"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {/* <Image src="/external.png" alt="" width={16} height={16} /> */}
                    <LiaFileUploadSolid className="h-5 w-5 stroke-[0.1] text-themeRedColor opacity-80 " />
                  </button>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-themeRedColor p-1"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {/* <Image src="/video.png" alt="" width={16} height={16} /> */}
                    <RiVideoUploadLine className="h-5 w-5 stroke-[0.1] text-themeRedColor opacity-80 " />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <ReactQuill
              className="w-full "
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Let's write something..."
            />
          </div>
        </div>
      </div>
      <div className="publish-button-wrapper absolute bottom-24  flex max-w-[1336px] justify-end">
        <button className="publish-button rounded-full border-none bg-themeRedColor px-5 py-2 text-white">
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
