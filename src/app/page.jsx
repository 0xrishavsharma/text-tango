// "use client"
import styles from "./home.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { cn } from "@/utils/utils";

export default function Home({ searchParams }) {
  // const queryClient = new QueryClient();
  const page = parseInt(searchParams?.page) || 1;

  return (
    <div className={cn(styles.container, "")}>
      <Featured />
      <CategoryList />
      <div className={cn(styles.content, "flex gap-12")}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
