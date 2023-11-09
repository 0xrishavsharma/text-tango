import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-12">
        <div className="flex-1 flex flex-col">
          <h1 className="text-5xl font-semibold mb-12">
            Lorem ipsum dolor sit ame.
            voluptatum place at atque autem perferendis?
          </h1>
          <div className="flex items-center  gap-4">
            <div className="relative h-12 w-12 rounded-full">
              <Image
                src="/style.png"
                className="rounded-full object-cover"
                fill
                alt=""
              />
            </div>
            <div className="text-softTextColor flex flex-col gap-1">
              <h3>Verika Pakhija</h3>
              <p className="text-xs">25th April 2023</p>
            </div>
          </div>
        </div>
        <div className="relative h-80 flex-1 rounded-md">
          <Image
            src="/p1.jpeg"
            className="rounded-md object-cover"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-[5]"></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
