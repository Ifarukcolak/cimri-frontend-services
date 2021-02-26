import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import CartIcon from "@/icons/cart";
import MenuIcon from "@/icons/menu";

export default function Header() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo}>Cimri</a>
        </Link>
        <div className={styles.rightContentMobile}>
          <Link href="/cart">
            <div className={styles.cartContainer}>
              <CartIcon width={28} height={28} className={styles.cartIcon} />
            </div>
          </Link>
          <div className={styles.profileContainer}>
            <MenuIcon
              width={30}
              height={30}
              className={styles.menuIcon}
              onClick={() =>
                setShowHeader({ transform: "translate3d(0vw, 0, 0)" })
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
      </div>
    </nav>
  );
}
