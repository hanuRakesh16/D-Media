import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import SignInButton from "./SignInButton";

export default function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <Link href={"/"}>
            <img
              src="https://yt3.ggpht.com/5aQeV9pcJlfuASu7QqoyQm0pwKJak-o4XJOSzTYRp9GqpWsHw6FQQhVnB9XIK5rERo3X_pn8=s900-c-k-c0x00ffffff-no-rj"
              alt="logo"
              className={styles.logo}
            />
          </Link>

          <Link href={"/create"}>Upload</Link>
        </div>

        <div className={styles.right}>
          <SignInButton />
        </div>
      </div>
      <div style={{ height: 64 }} />
    </>
  );
}
