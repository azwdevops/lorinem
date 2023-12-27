"use client";
import { NAVBAR_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { DarkModeToggle } from "..";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lorinem
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {NAVBAR_LINKS?.map((link) => (
          <Link href={link.url} key={link?.id} className={styles.link}>
            {link?.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
