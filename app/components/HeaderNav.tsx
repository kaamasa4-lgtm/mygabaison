"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../layout.module.css";

export default function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <div className={styles.hamburgerWrapper}>
      
      {/* ハンバーガーボタン */}
      <button
        className={styles.hamburgerButton}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* メニュー */}
      {open && (
        <nav className={styles.hamburgerMenu}>
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
            className={isActive("/sell") ? styles.activeLink : ""}
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
      )}
    </div>
  );
}