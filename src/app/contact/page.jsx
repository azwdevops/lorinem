import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@/components";

export const metadata = {
  title: "Lorinem | Contact",
  description: "Lorinem - Handcrafting award winning digital experiences",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            name=""
            className={styles.textarea}
            placeholder="message"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
