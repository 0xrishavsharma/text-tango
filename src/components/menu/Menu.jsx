import React from "react";
import styles from "./menu.module.css";
import { cn } from "@/utils";

const Menu = ({ className }) => {
  return <div className={cn(styles.container, className)}>Menu</div>;
};

export default Menu;
