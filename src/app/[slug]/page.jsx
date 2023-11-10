import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {

  const status = "authenticated"
  return (
    <div className="">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-12 text-5xl font-semibold">
            Lorem ipsum dolor sit ame. voluptatum place at atque autem
            perferendis?
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
            <div className="flex flex-col gap-1 text-softTextColor">
              <h3 className="font-semibold">Verika Pakhija</h3>
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
      <div className="flex gap-12">
        <div className="mt-12 flex-[5]">
          <div className="flex flex-col">
            <p className="mb-6 text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
            <h5 className="text-2xl font-bold">Lorem ipsum dolor sit.</h5>
            <p className="mb-5 text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
            <p className="mb-5 text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
            <p className="mb-5 text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
          </div>
        </div>
        <Menu />
      </div>
      <div>
        
        <Comments />
        
      </div>
    </div>
  );
};

export default SinglePage;
