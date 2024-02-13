"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const { push } = useRouter();

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status === "authenticated") {
    push("/");
  }

  return (
    <div className="mt-20 flex items-center  justify-center xl:min-h-[calc(100vh_-_380px)]">
      <div className="flex flex-col gap-12 bg-softBg p-6 xs:p-10 sm:p-16 md:p-24 ">
        <div
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
          className="flex cursor-pointer justify-center bg-themeRedColor px-3 py-2 text-center text-sm text-white sm:text-base ms:px-6 ms:py-3 md:font-semibold"
        >
          Sign in with Google
        </div>
        <div
          className="flex cursor-pointer justify-center bg-black px-3  py-2 text-center text-sm text-white sm:text-base ms:px-6 ms:py-3 md:font-semibold"
          onClick={(e) => {
            e.preventDefault();
            signIn("github");
          }}
        >
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
