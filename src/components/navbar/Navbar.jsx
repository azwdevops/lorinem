import { NAVBAR_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lorinem
      </Link>
      <div className={styles.links}>
        {NAVBAR_LINKS?.map((link) => (
          <Link href={link.url} key={link?.id} className={styles.link}>
            {link?.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
