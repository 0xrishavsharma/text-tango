"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();

  console.log("SessionProvider data", data);
  console.log("SessionProvider status", status);
  return (
    <div className="mt-20 flex items-center  justify-center xl:min-h-[calc(100vh_-_380px)]">
      <div className="flex flex-col gap-12 bg-softBg p-6 xs:p-10 sm:p-16 md:p-24 ">
        <div
          onClick={() => signIn("google")}
          className="flex cursor-pointer justify-center bg-red-400 px-3 py-2 text-center text-sm text-white sm:text-base ms:px-6 ms:py-3 md:font-semibold"
        >
          Sign in with Google
        </div>
        <div className="flex cursor-pointer justify-center bg-black px-3  py-2 text-center text-sm text-white sm:text-base ms:px-6 ms:py-3 md:font-semibold">
          Sign in with GitHub
        </div>
        <div className="flex cursor-pointer justify-center bg-blue-500 px-3 py-2 text-center text-sm text-white sm:text-base ms:px-6 ms:py-3 md:font-semibold">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
