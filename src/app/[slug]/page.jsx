import Comment from "@/components/comment/Comment";
import CommentSection from "@/components/commentSection/CommentSection";
import Menu from "@/components/menu/Menu";
import UserCard from "@/components/userCard/UserCard";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  const status = "authenticated";
  return (
    <div className="">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-12 text-4xl font-semibold xl:text-5xl 2xl:text-6xl">
            Lorem ipsum dolor sit ame. voluptatum place at atque autem
            perferendis?
          </h1>
          <UserCard />
        </div>
        <div className="relative hidden h-96 flex-1 lg:block">
          <Image
            src="/p1.jpeg"
            className="rounded-sm object-cover"
            fill
            alt=""
          />
        </div>
      </div>
      <div className="flex max-w-max gap-12">
        <div className="mt-12 flex-[5]">
          <div className="flex flex-col">
            <p className="mb-6 text-lg font-light ms:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
            <h5 className="text-2xl font-bold">Lorem ipsum dolor sit.</h5>
            <p className="mb-5 text-lg font-light ms:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
            <p className="mb-5 text-lg font-light ms:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
            <p className="mb-5 text-lg font-light ms:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              harum non, cupiditate placeat praesentium natus quasi quo dolorem,
              facilis vel sequi iusto sapiente! Eligendi, quae.
            </p>
          </div>
          <div>
            <CommentSection
              content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et."
            />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
