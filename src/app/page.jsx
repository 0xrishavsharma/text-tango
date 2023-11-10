import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/Pagination";
import Menu from "@/components/menu/Menu";
import { cn } from "@/utils";

export default function Home() {
  return (
    <div className={cn(styles.container, "")}>
      <Featured />
      <CategoryList />
      <div className={cn(styles.content, "flex gap-12")}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
