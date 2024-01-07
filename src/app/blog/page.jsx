import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";
import { cn } from "@/utils/utils";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;
  return (
    <div className="">
      <h1 className="bg-orange-300 p-2 text-center font-semibold text-white">
        Style Blog
      </h1>
      <div className={cn("flex gap-12")}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
