import React from "react";

const LoginPage = () => {
  return (
    <div className="mt-20 flex items-center  justify-center xl:min-h-[calc(100vh_-_380px)]">
      <div className="flex flex-col gap-12 bg-softBg p-6 xs:p-10 sm:p-16 md:p-24 ">
        <div className="bg-red-400 px-3 py-2 text-white ms:px-6 ms:py-3">
          Sign in with Google
        </div>
        <div className="bg-black px-3 py-2 text-white ms:px-6 ms:py-3">
          Sign in with GitHub
        </div>
        <div className="bg-blue-500 px-3 py-2 text-white ms:px-6 ms:py-3">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
