import clsx from "clsx";
import { twMerge } from "tw-merge";

export const targetUrl =
  process.env.NODE_ENV === "production"
    ? "https://blog.rishavsharma.com"
    : "http://localhost:3000";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const smallCardData = [
  {
    id: 1,
    tag: "Travel",
    tagColor: "bg-red-300",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "John Doe",
    img: "/travel.png",
    date: "30.10.2023",
  },
  {
    id: 2,
    tag: "Coding",
    tagColor: "bg-purple-400",
    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Zakil Faruk",
    img: "/coding.png",
    date: "22.9.2023",
  },
  {
    id: 3,
    tag: "Food",
    tagColor: "bg-green-400",
    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Adam Sandler",
    img: "/food.png",
    date: "1.11.2023",
  },
  {
    id: 4,
    tag: "Style",
    tagColor: "bg-blue-400 ",
    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Salvan Saik",
    img: "/style.png",
    date: "1.7.2023",
  },
  {
    id: 5,
    tag: "Culture",
    tagColor: "bg-orange-400 ",
    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Salvan Saik",
    img: "/culture.png",
    date: "1.7.2023",
  },
  {
    id: 6,
    tag: "Fashion",
    tagColor: "bg-pink-400 ",
    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "David Adams",
    img: "/fashion.png",
    date: "3.6.2022",
  },
];

export const categoryColors = [
  "bg-blue-400/50",
  "bg-pink-400/50",
  "bg-green-400/50",
  "bg-red-400/50",
  "bg-orange-400/50",
  "bg-purple-400/50",
];
