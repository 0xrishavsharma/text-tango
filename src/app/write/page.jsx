"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

const WritePage = () => {
  const [isOpen, setIsOpen] = useState();
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        },
      );
    };

    file && upload();
  }, [file]);

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

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: value,
          img: media,
          slug: slugify(title),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div>
        <div className="my-20 flex h-[700px] flex-col gap-12">
          <input
            className="padding-12 border-none bg-transparent text-6xl outline-none placeholder:text-softestTextColor"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <button
          className="publish-button rounded-full border-none bg-themeRedColor px-5 py-2 text-white"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
