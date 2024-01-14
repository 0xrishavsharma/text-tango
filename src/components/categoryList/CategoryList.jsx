import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/utils.js";
import { categoryColors } from "@/utils/utils";
import useFetch from "@/utils/lib/apiRequest";

const CategoryList = async () => {
  const categories = await useFetch("categories");

  return (
    <div className="flex flex-col">
      <h1 className="my-12 text-2xl font-bold lg:text-3xl">
        Popular Categories
      </h1>
      <div className={cn(styles.categories, "gap-8 text-[var(--textColor)]")}>
        {categories?.map((category, index) => {
          const color = categoryColors[index % categoryColors.length];
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
