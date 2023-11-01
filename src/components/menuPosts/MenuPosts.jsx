import Link from "next/link";
import React from "react";
import SmallCard from "../smallCard/SmallCard";
import { smallCardData } from "@/utils";

const MenuPosts = ({ type }) => {
  const firstFourData = smallCardData.slice(0, 4);

  return (
    <div>
      <div className="my-12">
        <h2 className="text-[var(--softTextColor)]">{"What's"} hot</h2>
        <h1 className="text-2xl font-bold">Most Popular</h1>
      </div>
      <div className="flex flex-col gap-8">
        {firstFourData.map((card, i) => {
          return (
            <Link href={"/"} className="" key={i}>
              <SmallCard
                type={type}
                tag={card.tag}
                tagColor={card.tagColor}
                para={card.para}
                author={card.author}
                img={card.img}
                date={card.date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPosts;
