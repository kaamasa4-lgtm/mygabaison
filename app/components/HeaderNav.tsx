"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../layout.module.css"; 

export default function HeaderNav() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.headerNav}>
      <Link 
        href="/search" 
        className={isActive("/search") ? styles.activeLink : ""}
      >
        野菜を探す
      </Link>
      <Link 
        href="/recipe" 
        className={isActive("/recipe") ? styles.activeLink : ""}
      >
        レシピ
      </Link>
      <Link 
        href="/sell" 
        className={`${styles.sellButton} ${isActive("/sell") ? styles.activeSell : ""}`}
      >
        出品する
      </Link>
      <Link 
        href="/mypage" 
        className={isActive("/mypage") ? styles.activeLink : ""}
      >
        マイページ
      </Link>
    </nav>
  );
}