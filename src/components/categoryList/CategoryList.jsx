import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/utils";
const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};
const CategoryList = async () => {
  const categories = await getCategories();

  const categoriesColors = [
    "bg-blue-400/50",
    "bg-pink-400/50",
    "bg-green-400/50",
    "bg-red-400/50",
    "bg-orange-400/50",
    "bg-purple-400/50",
  ];

  return (
    <div className="flex flex-col">
      <h1 className="my-12 text-2xl font-bold lg:text-3xl">
        Popular Categories
      </h1>
      {/* <div className="flex w-full flex-wrap justify-between gap-3"> */}
      <div className={cn(styles.categories, "gap-8 text-[var(--textColor)]")}>
        {categories?.map((category, index) => {
          const color = categoriesColors[index % categoriesColors.length];
          return (
            <Link
              key={category._id}
              href={`/blog?category=${category.title}`}
              className={cn(
                "flex h-16 w-full items-center justify-center gap-5 rounded-lg px-10 capitalize lg:gap-2 xl:gap-5",
                color,
              )}
            >
              {category.img && (
                <Image
                  className="aspect-[3/2] h-10 w-10 rounded-full object-cover"
                  src={category?.img}
                  alt=""
                  width="40"
                  height={40}
                />
              )}
              <p className="text-lg">{category.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
