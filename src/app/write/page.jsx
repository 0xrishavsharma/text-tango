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
import { PiCircleNotch } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";

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
  const [value, setValue] = useState(localStorage.getItem("blogcontent") || "");
  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState("");
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [title, setTitle] = useState(localStorage.getItem("blogtitle") || "");
  const [media, setMedia] = useState(localStorage.getItem("file") || null);
  const [category, setCategory] = useState(
    localStorage.getItem("blogcategory") || "",
  );

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
          setFileUploadProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              setFileUpload("paused");
              break;
            case "running":
              console.log("Upload is running");
              setFileUpload("running");
              break;
          }
          setFileUpload(snapshot.state);
        },

        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            localStorage.setItem("file", downloadURL);
            setFileUpload(null);
          });
        },
      );
    };
    file && upload();
    setFileUpload(null);
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
    open: { opacity: 0, x: 10 },
    closed: { opacity: 0, x: "-200%" },
  };

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
          categorySlug: category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        localStorage.removeItem("blogtitle");
        localStorage.removeItem("blogcontent");
        localStorage.removeItem("blogcategory");
        localStorage.removeItem("file");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  // Update localStorage in the state update functions
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    localStorage.setItem("blogtitle", e.target.value);
  };

  const handleValueChange = (value) => {
    setValue(value);
    localStorage.setItem("blogcontent", value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    localStorage.setItem("blogcategory", e.target.value);
  };

  return (
    <div className="relative my-20">
      <div>
        <div className="my-10 flex min-h-[700px] flex-col gap-12">
          <input
            className="padding-12 border-none bg-transparent text-6xl outline-none placeholder:text-softestTextColor"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              handleTitleChange(e);
            }}
          />
          {fileUpload === "running" ? (
            <div className="flex items-center gap-2 text-xl">
              {/* <div className="h-4 w-4 animate-bounce rounded-full bg-themeRedColor"></div> */}
              <PiCircleNotch className="animate-spin stroke-[1.2rem] text-green-400" />
              <p className="animate-pulse text-green-400 duration-1000 ">
                Uploading file, {Math.round(fileUploadProgress)}% done...
              </p>
            </div>
          ) : fileUpload === "paused" ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-bounce rounded-full bg-themeRedColor"></div>
              <p className="animate-ping text-green-400 text-themeRedColor">
                Paused...
              </p>
            </div>
          ) : (
            media && (
              <div className="relative flex h-[500px] w-full bg-contain">
                <Image
                  src={media}
                  alt=""
                  className="max-w-[100%]"
                  width={0}
                  height={0}
                  style={{ height: "100%", width: "auto" }}
                  unoptimized={true}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 300px"
                />
              </div>
            )
          )}

          {/* Add file */}
          <div className="relative flex flex-col items-start gap-8">
            <button
              className={cn(
                isOpen
                  ? "rotate-45 border-softTextColor"
                  : "border-themeRedColor",
                "flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] transition-all duration-300",
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div animate={{ rotate: [0, 180, 0] }}>
                <AiOutlinePlus className="stroke-[1rem] text-2xl" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="w-100% absolute left-16 flex h-max gap-6 bg-bg "
                  exit={{ opacity: 0, x: 0 }}
                  animate={{ opacity: [0, 1], x: 10 }}
                  variants={editorVariants}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <input
                    type="file"
                    id="imageUpload"
                    onChange={(e) => {
                      handleFileUpload(e);
                    }}
                    className="hidden"
                  />
                  <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-themeRedColor">
                    <label htmlFor="imageUpload" className="cursor-pointer">
                      <motion.div>
                        <ImImage className="h-4 w-4 stroke-[0.1] text-themeRedColor opacity-80 " />
                      </motion.div>
                    </label>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-themeRedColor p-1">
                    <LiaFileUploadSolid className="h-5 w-5 stroke-[0.1] text-themeRedColor opacity-80 " />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-themeRedColor p-1">
                    <RiVideoUploadLine className="h-5 w-5 stroke-[0.1] text-themeRedColor opacity-80 " />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <ReactQuill
              className="w-full p-0 "
              theme="bubble"
              value={value}
              onChange={(e) => {
                handleValueChange(e);
              }}
              placeholder="Let's write something..."
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label
              htmlFor="blogCategory"
              className="mb-2 text-lg font-bold text-gray-900"
            >
              Category
            </label>
            <select
              name="blogCategory"
              id="blogCategory"
              className="h-10 max-w-max rounded-lg border-[1px] border-themeRedColor bg-white/10 px-5 pr-16 text-sm font-semibold backdrop:blur-md focus:outline-none "
              value={category}
              onChange={(e) => {
                handleCategoryChange(e);
              }}
            >
              <option value="">Select a category</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="fashion">Fashion</option>
              <option value="style">Style</option>
              <option value="coding">Coding</option>
              <option value="culture">Culture</option>
            </select>
          </div>
        </div>
      </div>
      <div className="publish-button-wrapper mt-8 flex max-w-[1336px] items-start justify-start">
        <button
          className={cn(
            "publish-button rounded-full border-none bg-themeRedColor px-5 py-2 text-white",
            fileUpload === "running" && "cursor-not-allowed bg-gray-300",
          )}
          onClick={handleSubmit}
          disabled={fileUpload === "running"}
        >
          {fileUpload === "running" ? "Uploading..." : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default WritePage;
