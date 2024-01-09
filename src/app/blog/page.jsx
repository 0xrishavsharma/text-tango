import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";
import { cn } from "@/utils/utils";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;
  return (
    <div className="">
      <h1 className="bg-orange-300 p-2 text-center font-semibold text-white">
        <span className="capitalize">{category} Blog</span>
      </h1>
      <div className={cn("flex gap-12")}>
        <CardList page={page} category={category} />
        <Menu category={category} />
      </div>
    </div>
  );
};

export default BlogPage;
