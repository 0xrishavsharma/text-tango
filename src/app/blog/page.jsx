import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";
import { cn } from "@/utils/utils";

const BlogPage = () => {
  return (
    <div className="">
      <h1 className="bg-orange-300 p-2 text-center font-semibold text-white">
        Style Blog
      </h1>
      <div className={cn("flex gap-12")}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
