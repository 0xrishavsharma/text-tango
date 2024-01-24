import clsx from "clsx";
import { twMerge } from "tw-merge";

export const targetUrl =
  process.env.NODE_ENV === "production"
    ? "https://blog.rishavsharma.com"
    : "http://localhost:3000";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const categoryColors = [
  "bg-blue-400/50",
  "bg-pink-400/50",
  "bg-green-400/50",
  "bg-red-400/50",
  "bg-orange-400/50",
  "bg-purple-400/50",
];

export const smallCardData = [
  {
    id: 1,
    tag: "Fashion",
    tagColor: `${categoryColors[0]}`,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "John Doe",
    img: "/travel.png",
    date: "30.10.2023",
  },
  {
    id: 2,
    tag: "Food",
    tagColor: `${categoryColors[1]}`,

    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Zakil Faruk",
    img: "/coding.png",
    date: "22.9.2023",
  },
  {
    id: 3,
    tag: "Coding",
    tagColor: `${categoryColors[2]}`,

    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Adam Sandler",
    img: "/food.png",
    date: "1.11.2023",
  },
  {
    id: 4,
    tag: "Culture",
    tagColor: `${categoryColors[3]}`,

    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Salvan Saik",
    img: "/style.png",
    date: "1.7.2023",
  },
  {
    id: 5,
    tag: "Style",
    tagColor: `${categoryColors[4]}`,

    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Salvan Saik",
    img: "/culture.png",
    date: "1.7.2023",
  },
  {
    id: 6,
    tag: "Travel",
    tagColor: `${categoryColors[5]}`,

    para: "Item severem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "David Adams",
    img: "/fashion.png",
    date: "3.6.2022",
  },
];

export const getDate = (date) => {
  const d = new Date("2024-01-07T08:50:42.689Z");
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};
